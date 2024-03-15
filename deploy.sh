#!/bin/bash

docker rmi -f ect-ui:latest

docker build -t ect-ui:latest .

kubectl apply -f k8s/deployment.yaml -n ect

kubectl apply -f k8s/service.yaml -n ect

kubectl delete pod -n ect -l app=frontend