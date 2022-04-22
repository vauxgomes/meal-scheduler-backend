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

## Running application on Docker

```sh
docker build . -t <your username>/meal-server
docker run -p 3333:3333 --name meal-server -d <your username>/meal-server
```

## Running with docker-compose

```sh
docker-compose up -d
```

## Environment Variables Example

```
# Server
NODE_ENV=production
PORT=3333
ENV TIME_ZONE=America/Fortaleza

# Encrypting
HASH_SALT=10

# TOKEN
TK_KEY=E8LCmFh2sVmzFFaXx
TK_EXP=4h

# Database
DB_HOST=172.17.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=VBDp8dsAbv6Utu926jWX
DB_DATABASE=meal_db
```

*`DB_HOST` is set for using Docker

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
