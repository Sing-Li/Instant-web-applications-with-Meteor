#!/bin/bash
  OPLOG_DB_NAME=local
  DB_PORT=${MONGO_PORT_27017_TCP_PORT:-27017}
  DB_ADDR=${MONGO_PORT_27017_TCP_ADDR:-localhost}

  # kubernetes does not inject host file entries, docker recommends using 
  # host file


  DBNAME=${DB_NAME:-meteor}
  OPLOGDBNAME=${OPLOG_DB_NAME:-local}

  # override MONGO_URL with the url from the linked container
  export MONGO_URL=mongodb://$DB_ADDR:$DB_PORT/$DBNAME
  # if user wants to use oplog, defined the corresponding variable
  if ! [[ -z ${OPLOG_DB_NAME+x} ]]; then
    export MONGO_OPLOG_URL=mongodb://$DB_ADDR:$DB_PORT/$OPLOGDBNAME
  fi

echo "Environment variables ..."

env

