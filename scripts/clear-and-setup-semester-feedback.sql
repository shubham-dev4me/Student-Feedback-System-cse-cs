-- Clear all existing feedback data
TRUNCATE TABLE semester_feedback CASCADE;
DELETE FROM students;

-- Create semester-specific feedback tables for tracking

-- Third Semester Feedback Table
CREATE TABLE IF NOT EXISTS third_sem_feedback (
  id SERIAL PRIMARY KEY,
  student_roll VARCHAR(50),
  teacher_id INT,
  teacher_name VARCHAR(100),
  subject_name VARCHAR(100),
  q1 INT, q2 INT, q3 INT, q4 INT, q5 INT,
  q6 INT, q7 INT, q8 INT, q9 INT, q10 INT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Fourth Semester Feedback Table
CREATE TABLE IF NOT EXISTS fourth_sem_feedback (
  id SERIAL PRIMARY KEY,
  student_roll VARCHAR(50),
  teacher_id INT,
  teacher_name VARCHAR(100),
  subject_name VARCHAR(100),
  q1 INT, q2 INT, q3 INT, q4 INT, q5 INT,
  q6 INT, q7 INT, q8 INT, q9 INT, q10 INT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Fifth Semester Feedback Table
CREATE TABLE IF NOT EXISTS fifth_sem_feedback (
  id SERIAL PRIMARY KEY,
  student_roll VARCHAR(50),
  teacher_id INT,
  teacher_name VARCHAR(100),
  subject_name VARCHAR(100),
  q1 INT, q2 INT, q3 INT, q4 INT, q5 INT,
  q6 INT, q7 INT, q8 INT, q9 INT, q10 INT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sixth Semester Feedback Table
CREATE TABLE IF NOT EXISTS sixth_sem_feedback (
  id SERIAL PRIMARY KEY,
  student_roll VARCHAR(50),
  teacher_id INT,
  teacher_name VARCHAR(100),
  subject_name VARCHAR(100),
  q1 INT, q2 INT, q3 INT, q4 INT, q5 INT,
  q6 INT, q7 INT, q8 INT, q9 INT, q10 INT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seventh Semester Feedback Table
CREATE TABLE IF NOT EXISTS seventh_sem_feedback (
  id SERIAL PRIMARY KEY,
  student_roll VARCHAR(50),
  teacher_id INT,
  teacher_name VARCHAR(100),
  subject_name VARCHAR(100),
  q1 INT, q2 INT, q3 INT, q4 INT, q5 INT,
  q6 INT, q7 INT, q8 INT, q9 INT, q10 INT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
