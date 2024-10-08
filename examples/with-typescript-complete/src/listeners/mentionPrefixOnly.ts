import type { Events } from '@sapphire/framework';
import { Listener } from '@sapphire/framework';
import { TextChannel, type Message } from 'discord.js';

export class UserEvent extends Listener<typeof Events.MentionPrefixOnly> {
	public override async run(message: Message) {
		const prefix = this.container.client.options.defaultPrefix;
		return (message.channel as TextChannel).send(prefix ? `My prefix in this guild is: \`${prefix}\`` : 'Cannot find any Prefix for Message Commands.');
	}
}
