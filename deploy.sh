#!/bin/bash

docker rmi -f sdb-ui:latest

docker build -t sdb-ui:latest .

kubectl apply -f k8s/deployment.yaml -n sdb

kubectl delete pod -n sdb -l app=frontend