DROP DATABASE job_hunt;
CREATE DATABASE job_hunt;
\c job_hunt;

CREATE TABLE StatusTypes (
  statustype_id   SERIAL PRIMARY KEY,
  type            VARCHAR(50)
);

INSERT INTO StatusTypes(type)
VALUES
('Phone Interview'),
('In-Person Interview'),
('2nd In-Person'),
('3rd In Person'),
('Offer');



CREATE TABLE Jobs (
  job_id                 SERIAL PRIMARY KEY,
  date_added             TIMESTAMP, 
  statustype_id          INTEGER REFERENCES StatusTypes (statustype_id),
  company_name           VARCHAR(255),
  link_to_job_post       VARCHAR(255)
);

INSERT INTO Jobs(date_added,statustype_id ,company_name, link_to_job_post)
VALUES
('1999-01-08 04:05:06',1,'Blizzard Entertainment','https://bit.ly/2PP5DQ8');

CREATE TABLE Users (
  user_id         SERIAL PRIMARY KEY,
  name            VARCHAR(50),
  email           VARCHAR(50),
  password        VARCHAR(50),
  job_id          INTEGER REFERENCES Jobs (job_id)
);


INSERT INTO Users(name, email, password, job_id)
VALUES
('test', 'email', 'password',1);






































