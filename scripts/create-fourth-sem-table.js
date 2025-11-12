import { neon } from "@neondatabase/serverless"
import { config } from "dotenv"

config({ path: ".env.local" })

if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL not found in environment variables")
  process.exit(1)
}

const sql = neon(process.env.DATABASE_URL)

async function createTable() {
  try {
    console.log("Creating fourth_sem_feedback table...")
    
    await sql`
      CREATE TABLE IF NOT EXISTS fourth_sem_feedback (
        id SERIAL PRIMARY KEY,
        student_roll VARCHAR(50),
        teacher_id INT,
        teacher_name VARCHAR(100),
        subject_name VARCHAR(100),
        q1 INT, q2 INT, q3 INT, q4 INT, q5 INT,
        q6 INT, q7 INT, q8 INT, q9 INT, q10 INT,
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `
    
    console.log("✅ Table created successfully!")
  } catch (error) {
    console.error("❌ Error creating table:", error)
  }
}

createTable()
