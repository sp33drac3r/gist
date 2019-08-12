BEGIN;
INSERT INTO users (username) VALUES ('sp33drac3r');

INSERT INTO gists (user_id) (SELECT id FROM users WHERE username='sp33drac3r');
INSERT INTO files (gist_id) (SELECT id FROM gists LIMIT 1);
INSERT INTO revisions DEFAULT VALUES;
INSERT INTO file_revisions (file_id, revision_id, name, body) VALUES ((SELECT id FROM files LIMIT 1), (SELECT id FROM revisions LIMIT 1), 'test.txt', E'\x7f\x7f');
COMMIT;