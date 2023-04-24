# Installation

There are only two steps needed to run the tests.

1. Install the Android Emulator that satisfies the capabilities in the [local configs](./config/wdio.local.conf.ts)
2. Run `yarn install` in the root repo.

After the requirements are satisfied, tests can be run with `yarn test:local`.

There is an integration done with SauceLabs with my personal keys/ secret exposed.
A run can easily be started with `yarn test:sauce`.

And last, but not least, `yarn test:ci` in Github Actions is not currently functional.
