#!/bin/bash
docker stop abair-main-website
docker rm abair-main-website

docker login 10.0.0.2:5000 -u admin -p KiVGdGsRnMNcrmgt822w
docker rmi 10.0.0.2:5000/abair-main-website:main
docker pull 10.0.0.2:5000/abair-main-website:main

docker run -t -d -p 3000:3000 --restart always --network host --name abair-main-website 10.0.0.2:5000/abair-main-website:main