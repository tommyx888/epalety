import { supabaseAdmin } from '@/lib/supabase/client'

export interface Trigger {
  type: 'order_created' | 'quote_submitted' | 'product_low_stock'
  conditions?: Record<string, any>
}

export interface Action {
  type: 'send_email' | 'create_task' | 'update_status' | 'webhook'
  params: Record<string, any>
}

export interface Workflow {
  id: string
  name: string
  trigger: Trigger
  actions: Action[]
  enabled: boolean
}

export class WorkflowEngine {
  async execute(trigger: Trigger, data: any) {
    const workflows = await this.getActiveWorkflows(trigger.type)
    
    for (const workflow of workflows) {
      if (this.matchesConditions(workflow.trigger, data)) {
        await this.executeActions(workflow.actions, data)
      }
    }
  }
  
  private async getActiveWorkflows(triggerType: string): Promise<Workflow[]> {
    const { data } = await supabaseAdmin
      .from('workflows')
      .select('*')
      .eq('trigger_type', triggerType)
      .eq('enabled', true)
    
    return data || []
  }
  
  private matchesConditions(trigger: Trigger, data: any): boolean {
    if (!trigger.conditions) return true
    
    // Simple condition matching - extend as needed
    for (const [key, condition] of Object.entries(trigger.conditions)) {
      if (condition.gte && data[key] < condition.gte) return false
      if (condition.lte && data[key] > condition.lte) return false
      if (condition.eq && data[key] !== condition.eq) return false
    }
    
    return true
  }
  
  private async executeActions(actions: Action[], data: any) {
    for (const action of actions) {
      switch (action.type) {
        case 'send_email':
          await this.sendEmail(action.params, data)
          break
        case 'create_task':
          await this.createTask(action.params, data)
          break
        case 'webhook':
          await this.callWebhook(action.params, data)
          break
        case 'update_status':
          await this.updateStatus(action.params, data)
          break
      }
    }
  }
  
  private async sendEmail(params: Record<string, any>, data: any) {
    // Implement email sending
    console.log('Sending email:', params, data)
  }
  
  private async createTask(params: Record<string, any>, data: any) {
    await supabaseAdmin.from('tasks').insert({
      title: params.title,
      assignee: params.assignee,
      metadata: data,
    })
  }
  
  private async callWebhook(params: Record<string, any>, data: any) {
    await fetch(params.url, {
      method: params.method || 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }
  
  private async updateStatus(params: Record<string, any>, data: any) {
    await supabaseAdmin
      .from(params.table)
      .update({ status: params.status })
      .eq('id', data.id)
  }
}

export const workflowEngine = new WorkflowEngine()

