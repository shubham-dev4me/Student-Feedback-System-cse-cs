-- Clear all existing feedback data from all semester tables
DROP TABLE IF EXISTS thirdsem_feedback CASCADE;
DROP TABLE IF EXISTS foursem_feedback CASCADE;
DROP TABLE IF EXISTS fifthsem_feedback CASCADE;
DROP TABLE IF EXISTS sixsem_feedback CASCADE;
DROP TABLE IF EXISTS seventhsem_feedback CASCADE;

TRUNCATE TABLE thirdsem_feedback CASCADE;
TRUNCATE TABLE foursem_feedback CASCADE;
TRUNCATE TABLE fifthsem_feedback CASCADE;
TRUNCATE TABLE sixsem_feedback CASCADE;
TRUNCATE TABLE seventhsem_feedback CASCADE;

-- Verify tables are empty
SELECT COUNT(*) as third_sem_count FROM thirdsem_feedback;
SELECT COUNT(*) as four_sem_count FROM foursem_feedback;
SELECT COUNT(*) as fifth_sem_count FROM fifthsem_feedback;
SELECT COUNT(*) as sixth_sem_count FROM sixsem_feedback;
SELECT COUNT(*) as seventh_sem_count FROM seventhsem_feedback;
