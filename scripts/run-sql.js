import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

import { Pool } from 'pg';
import { readFileSync } from 'fs';
import path from 'path';

async function setupDatabase() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    console.error('DATABASE_URL is not set in .env.local');
    process.exit(1);
  }

  const pool = new Pool({
    connectionString,
  });

  try {
    const client = await pool.connect();
    const sql = readFileSync(path.join(process.cwd(), 'scripts', 'full_database_setup.sql')).toString();
    await client.query(sql);
    console.log('Database setup completed successfully.');
    client.release();
  } catch (error) {
    console.error('Error setting up database:', error);
  } finally {
    await pool.end();
  }
}

setupDatabase();
