import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function query(text: string, params?: any[]) {
  try {
    const client = await pool.connect();
    const result = await client.query(text, params);
    client.release();
    return result.rows;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
}

export const sql = { query };

export function isDatabaseConfigured(): boolean {
  return !!process.env.DATABASE_URL;
}
