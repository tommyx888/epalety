import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { join } from 'path'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function runMigration(filename: string) {
  const sql = readFileSync(join(process.cwd(), 'migrations', filename), 'utf-8')
  
  const { error } = await supabase.rpc('exec_sql', { sql })
  
  if (error) {
    throw new Error(`Migration failed: ${error.message}`)
  }
  
  console.log(`✅ Migration ${filename} completed`)
}

// Run migrations
const migrations = process.argv.slice(2)

if (migrations.length === 0) {
  console.error('Usage: npm run migrate <migration-file>')
  process.exit(1)
}

for (const migration of migrations) {
  await runMigration(migration)
}

