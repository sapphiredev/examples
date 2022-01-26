import config from '#rootJson/config';
import { Precondition } from '@sapphire/framework';

export class UserPrecondition extends Precondition {
	async run(message) {
		return config.owners.includes(message.author.id) ? this.ok() : this.error({ message: 'This command can only be used by the owners.' });
	}
}
