docker build -t next-prod -f Dockerfile.prod .
docker run -d -p 3000:3000 next-dev
