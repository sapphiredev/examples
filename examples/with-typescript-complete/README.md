# TypeScript Complete Sapphire Bot example

This is a more complete setup of a Discord bot using the [sapphire framework][sapphire] written in TypeScript.

It is similar to the [starter setup](../with-typescript-starter/), but adds more data structures and a more complete setup.

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

## License

Dedicated to the public domain via the [Unlicense], courtesy of the Sapphire Community and its contributors.

[sapphire]: https://github.com/sapphiredev/framework
[unlicense]: https://github.com/sapphiredev/examples/blob/main/LICENSE.md
