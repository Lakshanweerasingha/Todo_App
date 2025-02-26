#!/bin/bash
set -e

# Start the backend and frontend servers
docker-compose up -d

# Give the servers a few seconds to start
sleep 10

# Run Cypress tests
npx cypress run

# Stop the servers
docker-compose down
