import { exec } from 'child_process'
import { promisify } from 'util'
import { createClient } from '@supabase/supabase-js'
import { writeFileSync } from 'fs'
import { join } from 'path'

const execAsync = promisify(exec)

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

export async function createDatabaseBackup() {
  const timestamp = new Date().toISOString().replace(/:/g, '-')
  const filename = `backup-${timestamp}.sql`
  const filepath = join(process.cwd(), 'backups', filename)
  
  // Create backups directory if it doesn't exist
  const { mkdir } = await import('fs/promises')
  await mkdir(join(process.cwd(), 'backups'), { recursive: true })
  
  // pg_dump (if you have direct database access)
  // For Supabase, use their backup API or pg_dump with connection string
  const databaseUrl = process.env.DATABASE_URL
  
  if (databaseUrl) {
    await execAsync(`pg_dump "${databaseUrl}" > "${filepath}"`)
    console.log(`✅ Backup created: ${filename}`)
  } else {
    console.error('DATABASE_URL not set')
  }
  
  // Upload to Supabase Storage
  const fileContent = await import('fs').then(fs => fs.readFileSync(filepath))
  
  await supabase.storage
    .from('backups')
    .upload(filename, fileContent, {
      contentType: 'application/sql',
    })
  
  console.log(`✅ Backup uploaded to storage`)
  
  // Cleanup old backups (keep last 30 days)
  await cleanupOldBackups(30)
}

async function cleanupOldBackups(daysToKeep: number) {
  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - daysToKeep)
  
  // List backups from storage
  const { data: files } = await supabase.storage
    .from('backups')
    .list()
  
  if (!files) return
  
  for (const file of files) {
    const fileDate = new Date(file.created_at)
    if (fileDate < cutoffDate) {
      await supabase.storage
        .from('backups')
        .remove([file.name])
      console.log(`🗑️  Deleted old backup: ${file.name}`)
    }
  }
}

// Run if called directly
if (require.main === module) {
  createDatabaseBackup().catch(console.error)
}

