# Install yarn
yarn init

# Install the global CLI and its peer dependency
yarn global add tslint typescript

# In project directory
yarn add --dev typescript jest ts-jest got @types/jest @types/got
yarn ts-jest config:init
tslint --init

# Run tests
yarn jest
