#!/bin/bash
export DB_HOST='mysql'
export DB_PORT='3306'
export DB_NAME='marvel'
export DB_USER='root'
export DB_PASSWORD='password'
export JWT_KEY='secret'

docker-compose up -d