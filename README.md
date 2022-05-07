# Meal Scheduler Backend

### ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white") ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## Summary

- [Description](#description)
- [Running Docker](#running-application-on-docker)
- [Running Docker-Compose](#running-with-docker-compose)
- [Environment Variables](#environment-variables)
- [Citation](#citation)

## Description

Basic Node.js backend for managing meals in Brazilian Federal Institutes of Technology.

## Development Installation

After cloning this repository...

```sh
# Install packages
npm install # may or may not need sudo permission

# Create db/
mkdir db

# Use knex to set the database
npx knex migrate:latest --env development
npx knex seed:run --env development
```

## Running application on Docker

```sh
docker build . -t <your username>/meal-server
docker run -p 3333:3333 --name meal-server -d <your username>/meal-server
```

## Running with docker-compose

```sh
# Start
docker-compose up -d

# Stop containers
docker-compose down
```

> Both docker and docker-compose is set to use the `staging` profile.

## Environment Variables Example
### Development Profile

```sh
# Server
NODE_ENV=production
PORT=3333
TIME_ZONE=America/Fortaleza

# Encrypting
HASH_SALT=10

# TOKEN
TK_KEY=<TOKEN SECRET KEY>
TK_EXP=4h
```

### Staging Profile (MySQL on Docker)

For running Knex with MySQL append the following variables to the development variables within `.env`.

```sh
# Database
DB_HOST=172.17.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=<DB PASSWORD> # Fill here
DB_DATABASE=<DATABASE NAME> # Fill here
```

*`DB_HOST` is set for using Docker. It may not be the best practice.

### PostGresql

For running Knex with MySQL append the following variables to the development variables within `.env`.

```sh
# Database
DB_CONN_STR=<PG CONNECTION STRING> # Fill here
```

For PostGresql it is required to activate an extension before running Knex migration scripts:

```sql
-- ALLOW THE FOLLOWING EXTENSION FOR CREATING UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
ALTER EXTENSION "uuid-ossp" SET SCHEMA public;

-- CHECK IF IT IS WORKING
SELECT gen_random_uuid();
```

## Citation

In case you want to cite this project:

```bibtex
@software{Gomes_Meal_Scheduler_Backend_2022,
    author = {Gomes, Vaux Sandino Diniz},
    month = {4},
    title = {{Meal Scheduler Backend}},
    version = {1.0.0},
    year = {2022}
}
```
