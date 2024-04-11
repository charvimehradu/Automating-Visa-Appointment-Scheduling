# Path to dummy config file
dummy_config="$(dirname $0)/cypress.config.dist.js"

# Path to real config file
real_config="${ROOT}/tests/cypress.config.js"

# Copy the updated dummy config to the real config file
cp $dummy_config $real_config

# Update Cypress configuration file with the provided values
sed -i "s/username_replace/${USERNAME}/g; s/password_replace/${PASSWORD}/g" $real_config

echo "Username and password updated in cypress.config.js"

echo "Configuration updated successfully!"