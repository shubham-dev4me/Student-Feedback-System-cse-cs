import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

// Read environment variable
const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("❌ DATABASE_URL not found in environment variables");
  console.log("Please set DATABASE_URL in your .env.local file");
  process.exit(1);
}

const pool = new Pool({
  connectionString: DATABASE_URL,
});

async function createTable() {
  try {
    console.log("Creating fifth_sem_feedback table...");
    
    const client = await pool.connect();
    await client.query(`
      CREATE TABLE IF NOT EXISTS fifth_sem_feedback (
        id SERIAL PRIMARY KEY,
        student_roll VARCHAR(50),
        teacher_id INT,
        teacher_name VARCHAR(100),
        subject_name VARCHAR(100),
        q1 INT, q2 INT, q3 INT, q4 INT, q5 INT,
        q6 INT, q7 INT, q8 INT, q9 INT, q10 INT,
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    client.release();
    
    console.log("✅ Table created successfully!");
  } catch (error) {
    console.error("❌ Error creating table:", error);
    process.exit(1);
  }
}

createTable();