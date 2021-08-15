# PM2 Sapphire Bot example

This is a basic setup of a Discord bot using the [sapphire framework][sapphire] written in TypeScript. This example contains a configuration example for pm2.

## How to use it?

Install pm2 globally with `npm install -g pm2`

First make sure you have a build version of the bot by running the following;

```sh
npm install
npm run build
```

Then to run your bot with pm2 use;

```sh
npm run start:node

# or

npm start

# or

pm2 start ecosystem.config.js
```

# License

Copyright © 2021, [The Sapphire Community and its contributors](https://github.com/sapphiredev).
Released under the [Fully Open Source License][fully-open-source].

The code in this repo is licensed under a custom [Fully Open Source][fully-open-source] license, which means you're free to take anything in this repository and put it into your own bot without license attribution back to this repository. Overall the license is based on the [MIT] license.

[sapphire]: https://github.com/sapphiredev/framework
[fully-open-source]: https://github.com/sapphiredev/examples/blob/main/LICENSE.md
[mit]: https://opensource.org/licenses/MIT
