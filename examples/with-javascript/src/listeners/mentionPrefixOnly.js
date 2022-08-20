const { Listener } = require('@sapphire/framework');

class UserEvent extends Listener {
	async run(message) {
		const prefix = this.container.client.options.defaultPrefix;
		return message.channel.send(prefix ? `My prefix in this guild is: \`${prefix}\`` : 'Cannot find any Prefix for Message Commands.');
	}
}

module.exports = {
	UserEvent
};
