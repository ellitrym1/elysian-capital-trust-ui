#!/bin/bash

docker rmi -f sdb-ui:latest

docker build --no-cache -t sdb-ui:latest .

kubectl apply -f k8s/deployment.yaml -n sdb

kubectl delete pods --all -n sdb