import type { Events } from '@sapphire/framework';
import { Listener } from '@sapphire/framework';
import { ChannelType, type Message } from 'discord.js';

export class UserEvent extends Listener<typeof Events.MentionPrefixOnly> {
	public override async run(message: Message) {
		// TODO: replace with BaseChannel#isSendable once discord.js releases a new version
		// Bots cannot send messages in group DMs, so we have no choice but to return.
		if (message.channel.type === ChannelType.GroupDM) return;

		const prefix = this.container.client.options.defaultPrefix;
		return message.channel.send(prefix ? `My prefix in this guild is: \`${prefix}\`` : 'Cannot find any Prefix for Message Commands.');
	}
}
