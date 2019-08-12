-- be sure to create the database first
BEGIN;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(30),
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE gists (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid,
  FOREIGN KEY (user_id) REFERENCES users (id),
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE revisions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE files (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  gist_id uuid,
  FOREIGN KEY (gist_id) REFERENCES gists (id),
  deleted BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE file_revisions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(30),
  body bytea,
  revision_id uuid,
  file_id uuid,
  FOREIGN KEY (revision_id) REFERENCES revisions (id),
  FOREIGN KEY (file_id) REFERENCES files (id),
  created_at TIMESTAMP DEFAULT current_timestamp
);
COMMIT;