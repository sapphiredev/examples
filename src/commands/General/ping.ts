import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
	description: 'ping pong',
	enabled: true
})
export class UserCommand extends Command {
	public async run(message: Message) {
		const msg = await message.channel.send('Ping?');

		return msg.edit(
			`Pong! Bot Latency ${Math.round(this.context.client.ws.ping)}ms. API Latency ${msg.createdTimestamp - message.createdTimestamp}ms.`
		);
	}
}
