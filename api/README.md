# API SIF

## Pre-requisites
- Node.js > 20
- Docker desktop (optional)

## Install instructions

1. Install the required packages:
```bash
npm install
```

2. Up database with docker-compose, this can be skipped if you have a local database running, 
but you need to change the database configuration in the `main.js` file to match your local database configuration. 
To run the database with docker-compose run the following command
```bash
docker-compose up -d
```

3. Run the server:
```bash
npm run dev
```