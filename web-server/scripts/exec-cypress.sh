#!/bin/bash


echo "Start creating cypress.config.js"
source  ${ROOT}/scripts/config-setup.sh

echo "Start Cypress"
cypress open --project ${ROOT}/tests --e2e

exit 1