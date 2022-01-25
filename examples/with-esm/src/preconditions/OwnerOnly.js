import { Precondition } from '@sapphire/framework';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { owners } = require('../config.json');

export class UserPrecondition extends Precondition {
	async run(message) {
		return owners.includes(message.author.id) ? this.ok() : this.error({ message: 'This command can only be used by the owners.' });
	}
}
