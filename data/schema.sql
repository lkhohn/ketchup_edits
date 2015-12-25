DROP TABLE locations;
CREATE TABLE locations (
  id SERIAL Primary Key,
   name VARCHAR(256)
);


  DROP TABLE  users;
  CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(256),
    password VARCHAR(256),
    salt numeric,
    email VARCHAR(256)
  );

DROP TABLE appointments;
CREATE TABLE appointments(
  id SERIAL PRIMARY KEY,
  creator_id integer,
  invite_id integer,
  address VARCHAR(256),
  loc_lat  decimal,
  loc_lng decimal,
  start_datetime VARCHAR(256),
  duration VARCHAR(256),
  description VARCHAR(256),
  creator_confirm integer,
  invite_confirm integer,
  location_id integer
);

  DROP TABLE preferences;
  CREATE TABLE preferences(
    user_id numeric,
    avatar_url VARCHAR(256),
    googleCal_url VARCHAR(256)
  );

  -- DROP TABLE apt_sum;
  -- CREATE TABLE apt_sum(
  --   user_id numeric,
  --   appointments_id numeric,
  --   location_id numeric,
  --   start_datetime VARCHAR(256)
  -- );
-- users = { id: 2,
--      username: 'john@jack.com',
--      password: 'pass123',
--      salt: '1',
--      email: 'john@jack.com' }
