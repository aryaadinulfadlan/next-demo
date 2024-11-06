docker build -t next-prod -f Dockerfile.prod .
docker run -d -p 3000:3000 next-dev

POSTGRE SQL

- select datname from pg_database;
- create database dbname;
- drop database dbname;
- \c dbname
- \dt
