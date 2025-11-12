-- Create feedback tables for all semesters
-- Third Semester
CREATE TABLE IF NOT EXISTS thirdsem_feedback (
  id SERIAL PRIMARY KEY,
  roll_number VARCHAR(50) NOT NULL,
  teacher_id VARCHAR(50) NOT NULL,
  teacher_name VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  q1 INT,
  q2 INT,
  q3 INT,
  q4 INT,
  q5 INT,
  q6 INT,
  q7 INT,
  q8 INT,
  q9 INT,
  q10 INT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(roll_number, teacher_id)
);

-- Fourth Semester
CREATE TABLE IF NOT EXISTS foursem_feedback (
  id SERIAL PRIMARY KEY,
  roll_number VARCHAR(50) NOT NULL,
  teacher_id VARCHAR(50) NOT NULL,
  teacher_name VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  q1 INT,
  q2 INT,
  q3 INT,
  q4 INT,
  q5 INT,
  q6 INT,
  q7 INT,
  q8 INT,
  q9 INT,
  q10 INT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(roll_number, teacher_id)
);

-- Fifth Semester
CREATE TABLE IF NOT EXISTS fifthsem_feedback (
  id SERIAL PRIMARY KEY,
  roll_number VARCHAR(50) NOT NULL,
  teacher_id VARCHAR(50) NOT NULL,
  teacher_name VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  q1 INT,
  q2 INT,
  q3 INT,
  q4 INT,
  q5 INT,
  q6 INT,
  q7 INT,
  q8 INT,
  q9 INT,
  q10 INT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(roll_number, teacher_id)
);

-- Sixth Semester
CREATE TABLE IF NOT EXISTS sixsem_feedback (
  id SERIAL PRIMARY KEY,
  roll_number VARCHAR(50) NOT NULL,
  teacher_id VARCHAR(50) NOT NULL,
  teacher_name VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  q1 INT,
  q2 INT,
  q3 INT,
  q4 INT,
  q5 INT,
  q6 INT,
  q7 INT,
  q8 INT,
  q9 INT,
  q10 INT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(roll_number, teacher_id)
);

-- Seventh Semester
CREATE TABLE IF NOT EXISTS seventhsem_feedback (
  id SERIAL PRIMARY KEY,
  roll_number VARCHAR(50) NOT NULL,
  teacher_id VARCHAR(50) NOT NULL,
  teacher_name VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  q1 INT,
  q2 INT,
  q3 INT,
  q4 INT,
  q5 INT,
  q6 INT,
  q7 INT,
  q8 INT,
  q9 INT,
  q10 INT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(roll_number, teacher_id)
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_thirdsem_roll ON thirdsem_feedback(roll_number);
CREATE INDEX IF NOT EXISTS idx_thirdsem_teacher ON thirdsem_feedback(teacher_id);
CREATE INDEX IF NOT EXISTS idx_foursem_roll ON foursem_feedback(roll_number);
CREATE INDEX IF NOT EXISTS idx_foursem_teacher ON foursem_feedback(teacher_id);
CREATE INDEX IF NOT EXISTS idx_fifthsem_roll ON fifthsem_feedback(roll_number);
CREATE INDEX IF NOT EXISTS idx_fifthsem_teacher ON fifthsem_feedback(teacher_id);
CREATE INDEX IF NOT EXISTS idx_sixsem_roll ON sixsem_feedback(roll_number);
CREATE INDEX IF NOT EXISTS idx_sixsem_teacher ON sixsem_feedback(teacher_id);
CREATE INDEX IF NOT EXISTS idx_seventhsem_roll ON seventhsem_feedback(roll_number);
CREATE INDEX IF NOT EXISTS idx_seventhsem_teacher ON seventhsem_feedback(teacher_id);
