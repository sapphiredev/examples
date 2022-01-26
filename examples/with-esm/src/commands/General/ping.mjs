import { Command } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';

export class UserCommand extends Command {
	constructor(context, options) {
		super(context, {
			...options,
			description: 'ping pong'
		});
	}

	async messageRun(message) {
		const msg = await send(message, 'Ping?');

		const content = `Pong from JavaScript (ESM Mode)! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${
			msg.createdTimestamp - message.createdTimestamp
		}ms.`;

		return send(message, content);
	}
}
