#!/bin/bash

# Login to our private registry
docker login 10.0.0.2:5000 -u admin -p KiVGdGsRnMNcrmgt822w

# Store the original working directory
original_directory="$(pwd)"

# Switch to the project's working directory
cd /home/services/abair-main-website

# Create volumes if they don't exist
if [ ! -d "$(pwd)/data" ]; then
    mkdir "$(pwd)/data"
fi

# Remove the existing containers and network
docker compose down

# Pull the new version of the containers
docker compose pull

# Run the containers in daemon mode (in the background)
docker compose up -d

# Go back to the original directory
cd "$original_directory"