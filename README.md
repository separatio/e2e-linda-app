# Installation

Env Requirements: NodeJS 16.x, npm

## Docker

Simply run `npm run docker:test`; This should create the Docker image and run the container;
All output is logged to the console;

## Local

1. Install Android Studio.
2. Configure Android Studio (emulator, platform, etc...) so that it matches [local configs](./config/wdio.local.conf.ts)
3. Run `npm install -g yarn`
4. Run `yarn install`
5. Run `yarn test:local`

## SauceLabs

There is an integration done with SauceLabs with my personal keys/ secret exposed.
A run can easily be started with `yarn test:sauce`.

## GitHub Actions

`yarn test:ci` in Github Actions is not currently functional.
