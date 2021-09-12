const { Precondition } = require('@sapphire/framework');
const { owners } = require('../config.json');

class UserPrecondition extends Precondition {
	async run(message) {
		return owners.includes(message.author.id) ? this.ok() : this.error({ message: 'This command can only be used by the owners.' });
	}
}

module.exports.UserPrecondition = UserPrecondition;
