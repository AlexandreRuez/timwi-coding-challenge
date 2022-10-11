#!/bin/bash
export API_PORT='3000'
export MARVEL_API_URL='https://gateway.marvel.com:443/v1/public/'
export MARVEL_PUBLIC_KEY='MARVEL_PUBLIC_KEY'
export MARVEL_PRIVATE_KEY='MARVEL_PRIVATE_KEY'
export DB_HOST='mysql'
export DB_PORT='3306'
export DB_NAME='marvel'
export DB_USER='root'
export DB_PASSWORD='password'
export JWT_KEY='secret'

envsubst < frontend/src/environments/environment.template.ts > frontend/src/environments/environment.ts

docker-compose up -d