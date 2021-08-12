const { Command } = require('@sapphire/framework');

class UserCommand extends Command {
	constructor(context, options) {
		super(context, {
			...options,
			description: 'ping pong'
		});
	}

	async run(message) {
		const msg = await message.channel.send('Ping?');

		return msg.edit(
			`Pong from javascript! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${
				msg.createdTimestamp - message.createdTimestamp
			}ms.`
		);
	}
}

exports.UserCommand = UserCommand;
