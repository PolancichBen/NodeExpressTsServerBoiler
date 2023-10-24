# NodeExpressTsServerBoiler

This is a Boiler for a Node Express Typescript Server using Node 18.

![TSExpressNodeJS](https://miro.medium.com/max/878/0*a6oSE8C5z6SjVtjj.png)

## Pre-Requisites

In order to run this application, be sure you have [node](https://nodejs.org/en/) installed on your machine.
You can verify you do by typing `node -v` in your terminal.
_Sidenote: I use [NVM](https://github.com/nvm-sh/nvm#intro) to easily switch between various node versions._

After you have node installed you'll want to enter the root of this repo, via terminal, and install all node modules. `npm i`

Once `node_modules` have been installed. You will need to review the `.env` file and setup your environmental variables.

## Available Scripts

In the project directory, you can run:

#### `npm run start`

This is not yet set up and will need to be set up dependent on your server

#### `npm run local`

Runs the server in the local mode.
The server runs on the Port specified in the `.env` file.

#### `npm run test`

Runs a jest testing suite for Unit testing.

#### `npm run check-files`

Checks all files for linting errors

#### `npm run fix-files`

Fixes all files from linting errors

#### `npm run build`

Runs a production build.
Outputs the build in a build folder on the root.

#### `npm run build:dev`

Runs a build in a development node env.
Outputs the build in a build folder on the root.

#### `npm run validate-webpack`

Validates webpack configuration is setup properly
