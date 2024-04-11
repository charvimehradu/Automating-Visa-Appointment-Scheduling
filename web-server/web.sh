#!/bin/bash
echo "Running web.sh"

cd "web-server"

real_config="tests/cypress.config.js"

# Prompt user for username
read -p "Enter your site username: " visa_username

# Prompt user for password (-s for privacy)
read -p "Enter your site password: " visa_password

echo ""
echo "Cleaning up the old containers"
docker compose down --volumes

echo "Creating fresh containers and start"
ROOT=$ROOT USERNAME=$visa_username PASSWORD=$visa_password docker compose -f $(dirname $0)/docker-compose.yml up --force-recreate

