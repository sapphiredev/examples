import { Command } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';
import { send } from '@sapphire/plugin-editable-commands';
import type { Message } from 'discord.js';

@ApplyOptions<Command.Options>({
	description: 'ping pong'
})
export class UserCommand extends Command {
	public async messageRun(message: Message) {
		const msg = await send(message, 'Ping?');

		return send(
			message,
			`Pong from Docker! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${
				msg.createdTimestamp - message.createdTimestamp
			}ms.`
		);
	}
}
