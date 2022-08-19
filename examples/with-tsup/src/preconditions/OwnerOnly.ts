import { Precondition } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { envParseArray } from '../lib/env-parser';

const OWNERS = envParseArray('OWNERS');

export class UserPrecondition extends Precondition {
	public async messageRun(message: Message) {
		return OWNERS.includes(message.author.id) ? this.ok() : this.error({ message: 'This command can only be used by the owner.' });
	}
}

declare module '@sapphire/framework' {
	interface Preconditions {
		OwnerOnly: never;
	}
}
