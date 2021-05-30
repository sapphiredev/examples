import { Precondition } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { OWNER_ID } from '../config';

export default class extends Precondition {
	public async run(message: Message) {
		return OWNER_ID === message.author.id ? this.ok() : this.error({ message: 'This command can only be used by the owner.' });
	}
}
