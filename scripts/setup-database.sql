-- Create login database tables
CREATE TABLE IF NOT EXISTS admin_login (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'admin'
);

CREATE TABLE IF NOT EXISTS students (
  id SERIAL PRIMARY KEY,
  roll_number VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100),
  password VARCHAR(255) NOT NULL,
  name VARCHAR(100),
  semester INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS feedback_categories (
  id SERIAL PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL,
  description TEXT
);

CREATE TABLE IF NOT EXISTS feedback_responses (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES students(id),
  semester INT,
  subject VARCHAR(100),
  rating INT CHECK (rating >= 1 AND rating <= 5),
  comments TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create semester feedback tables (hit3)
CREATE TABLE IF NOT EXISTS semester_feedback (
  id SERIAL PRIMARY KEY,
  semester INT,
  subject VARCHAR(100),
  instructor VARCHAR(100),
  rating INT CHECK (rating >= 1 AND rating <= 5),
  question_num INT,
  student_feedback TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create voting system tables
CREATE TABLE IF NOT EXISTS voters (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(100),
  voted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS candidates (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  party VARCHAR(100),
  description TEXT,
  votes INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS votes (
  id SERIAL PRIMARY KEY,
  voter_id INT REFERENCES voters(id),
  candidate_id INT REFERENCES candidates(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create poems table
CREATE TABLE IF NOT EXISTS poems (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default admin credentials
INSERT INTO admin_login (username, password, role) VALUES 
  ('admin', 'admin', 'admin'),
  ('adminhod', 'adminhod', 'admin')
ON CONFLICT (username) DO NOTHING;

-- Insert feedback categories
INSERT INTO feedback_categories (category_name, description) VALUES 
  ('Course Content', 'Quality and relevance of course material'),
  ('Teaching', 'Instructor teaching methodology'),
  ('Assessment', 'Fairness and clarity of assessments'),
  ('Resources', 'Quality of learning resources')
ON CONFLICT DO NOTHING;

-- Insert sample candidates
INSERT INTO candidates (name, party, description) VALUES 
  ('Candidate A', 'Party Alpha', 'Candidate for Party Alpha'),
  ('Candidate B', 'Party Beta', 'Candidate for Party Beta'),
  ('Candidate C', 'Party Gamma', 'Candidate for Party Gamma'),
  ('Candidate D', 'Party Delta', 'Candidate for Party Delta')
ON CONFLICT DO NOTHING;
