import { Command, CommandOptions, PieceContext } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class UserCommand extends Command {
	public constructor(context: PieceContext, options: CommandOptions) {
		super(context, {
			...options,
			description: 'ping pong'
		});
	}

	public async run(message: Message) {
		const msg = await message.channel.send('Ping?');

		return msg.edit(
			`Pong from pm2! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${
				msg.createdTimestamp - message.createdTimestamp
			}ms.`
		);
	}
}
