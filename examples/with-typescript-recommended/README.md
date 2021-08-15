# TpeScript Sapphire Bot example

This is a basic setup of a Discord bot using the [sapphire framework][sapphire] written in TypeScript

## How to use it?

### Prerequisite

```sh
npm install
```

### Development

This example can be run with `tsc-watch` to watch the files and automatically restart your bot.

```sh
npm run watch:start
```

### Production

You can also run the bot with `npm dev`, this will first build your code and then run `node ./dist/index.js`. But this is not the recommended way to run a bot in production.

# License

Copyright © 2021, [The Sapphire Community and its contributors](https://github.com/sapphiredev).
Released under the [Fully Open Source License][fully-open-source].

The code in this repo is licensed under a custom [Fully Open Source][fully-open-source] license, which means you're free to take anything in this repository and put it into your own bot without license attribution back to this repository. Overall the license is based on the [MIT] license.

[sapphire]: https://github.com/sapphiredev/framework
[fully-open-source]: https://github.com/sapphiredev/examples/blob/main/LICENSE.md
[mit]: https://opensource.org/licenses/MIT
