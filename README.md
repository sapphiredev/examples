<div align="center">

![Sapphire Logo](https://cdn.skyra.pw/gh-assets/sapphire-banner.png)

# Sapphire Sample Bot

**A very basic setup of a [Sapphire] bot, used as an example and reference point**

[![GitHub](https://img.shields.io/badge/license-Fully%20Open%20Source-green?logo=github)](https://github.com/favna/sapphire-sample-bot/blob/main/LICENSE.md)

[![Support Server](https://discord.com/api/guilds/737141877803057244/embed.png?style=banner2)](https://sapphirejs.dev/discord)

</div>

---

## Description

This is a very basic setup of a Discord bot using the [Sapphire] framework. It is meant as a "getting started" / reference point for people who are new to Sapphire. It sets up some opinionated defaults (such as storing config in environment variables) and offers a few basic commands and other pieces.

The code in this repo is licensed under a custom [Fully Open Source][fully-open-source] license, which means you're free to take anything in this repository and put it into your own bot without license attribution back to this repository. Overall the license is based on the [MIT] license.

## Features

-   **Commands**
    -   `ping`  
        _**note**: This command is pretty self explanatory. It sends a ping, and you get a pong back_
    -   `eval`  
        _**note**: this eval command is not setup to sanitize your tokens, however it is setup to only work when you, the bot owner, uses it. Use it in your own bot with care._
-   **Events**
    -   `ready`  
        _**note**: This event is triggered when the bot is ready to accept commands. It logs some basic information about what has been loaded_
    -   `mentionPrefixOnly`  
         _**note**: This event is triggered when sending a message that exclusively has a mention of the bot. It can be used for sending a reminder of the bot's configured prefix_
    -   `messageUpdate`  
         _**note**: This event triggers when editing a message and it will ensure that through [`@skyra/editable-commands`] another command execution is triggered. In the future this event will be superseded by a plugin._
    -   `commandSuccessLogger`  
         _**note**: This event is triggered when executing any command. It will log that command to the console_
    -   `commandDenied`  
         _**note**: This event is triggered when a command fails, such as when parsing of argument fails. You can use this event to send some kind of error message to your users._
-   **Preconditions**
    -   `OwnerOnly`  
        _**note**: this precondition can restrict a command to only be usable by the configured owner of the bot. You can configure the owner(s) in the environment variables._
-   **Routes (this is for [`@sapphire/plugin-api`])**
    -   `hello-world`  
        _**note**: A very simple route that returns "Hello World" for `GET` and `POST` requests. Routes to `/hello-world`_
    -   `main`  
        _**note**: A very simple route that returns "Landing Page!" for `GET` and `POST` requests. Routes to `/`_
-   **Other**
    -   `src/lib/constants`  
         _**note**: A file with some path constants_
    -   `src/lib/env-parser`  
         _**note**: The file with helper functions for parsing the environment variables from `.env` into JavaScript objects._
    -   `src/lib/setup`  
         _**note**: A file that initialises and registers various libraries_
    -   `src/sample-bot.ts`
        _**note**: The main bot file, this is called by NodeJS after compiling the TypeScript code._

## Meta

### License

Copyright © 2021, [Favna](https://github.com/Favna).
Released under the [Fully Open Source License][fully-open-source].

### Buy me some doughnuts

This project is and always will be open source, even if I don't get donations. That being said, I know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

I accept donations through Ko-fi, Paypal, Patreon, GitHub Sponsorships, and various crypto currencies. You can use the buttons below to donate through your method of choice.

|   Donate With   |                   Address                    |
| :-------------: | :------------------------------------------: |
| GitHub Sponsors |         [Click Here][githubsponsors]         |
|      Ko-fi      |          [Click Here][kofisponsors]          |
|     Patreon     |        [Click Here][patreonsponsors]         |
|     PayPal      |         [Click Here][paypalsponsors]         |
|     Bitcoin     |     `1E643TNif2MTh75rugepmXuq35Tck4TnE5`     |
|    Ethereum     | `0xF653F666903cd8739030D2721bF01095896F5D6E` |
|    LiteCoin     |     `LZHvBkaJqKJRa8N7Dyu41Jd1PDBAofCik6`     |

[sapphire]: https://github.com/sapphiredev/framework
[fully-open-source]: LICENSE.md
[mit]: https://opensource.org/licenses/MIT
[`@skyra/editable-commands`]: https://www.npmjs.com/package/@skyra/editable-commands
[`@sapphire/plugin-api`]: https://www.npmjs.com/package/@sapphire/plugin-api
[githubsponsors]: https://github.com/sponsors/Favna
[kofisponsors]: https://donate.favware.tech/kofi
[patreonsponsors]: https://donate.favware.tech/patreon
[paypalsponsors]: https://donate.favware.tech/paypal
