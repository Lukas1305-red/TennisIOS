# Tutorial how to recreate it 
### For reference: https://www.youtube.com/watch?v=-MTSQjw5DrM 

# Download Node with brew 
# NOTE:
# Homebrew is not a Node.js package manager.
# Please ensure it is already installed on your system.
# Follow official instructions at https://brew.sh/
# Homebrew only supports installing major Node.js versions and might not support the latest Node.js version from the 22 release line.

# download and install Node.js
brew install node@22

# verifies the right Node.js version is in the environment
node -v # should print `v22.9.0`

# verifies the right npm version is in the environment
npm -v # should print `10.8.3` 

# run the server with 
node index.js

