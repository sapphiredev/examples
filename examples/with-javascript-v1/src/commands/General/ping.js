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
			`Pong from JavaScript V1! Bot Latency ${Math.round(this.context.client.ws.ping)}ms. API Latency ${
				msg.createdTimestamp - message.createdTimestamp
			}ms.`
		);
	}
}

exports.UserCommand = UserCommand;
