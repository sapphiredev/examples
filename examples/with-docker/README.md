# Docker Sapphire Bot example

This is a basic setup of a Discord bot using the [sapphire framework][sapphire] written in TypeScript containerized with Docker

## How to use it?

### Prerequisite

Copy the `.env.example` and rename it to `.env`, make sure to fill the Token

### Development

Run `docker-compose up`. This will start the bot in watch mode and automatically run it after each save.
It will build the `Dockerfile` up untill the `development` stage.

### Production

Just like in the development step, you have to fill in the `.env` file and then run the following command to create a production image;

```sh
docker build . -t sapphire-sample-bot
```

To test if your image works, you can run:

```sh
docker run --env-file .env sapphire-sample-bot
```

# License

Copyright © 2021, [Favna](https://github.com/Favna).
Released under the [Fully Open Source License][fully-open-source].

The code in this repo is licensed under a custom [Fully Open Source][fully-open-source] license, which means you're free to take anything in this repository and put it into your own bot without license attribution back to this repository. Overall the license is based on the [MIT] license.

[sapphire]: https://github.com/sapphiredev/framework
[fully-open-source]: LICENSE.md
[mit]: https://opensource.org/licenses/MIT
