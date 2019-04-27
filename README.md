# Install yarn
yarn init

# Install the global CLI and its peer dependency
yarn global add tslint typescript

# In project directory
yarn add --dev typescript jest ts-jest axios @types/jest
yarn ts-jest config:init
tslint --init

# In VSCode
(using Ctrl+P)
ext install ms-vscode.vscode-typescript-tslint-plugin

# Run tests
yarn jest
