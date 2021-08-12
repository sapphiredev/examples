const { Listener } = require('@sapphire/framework');

class UserEvent extends Listener {
	async run(message) {
		const prefix = this.container.client.options.defaultPrefix;
		return message.channel.send(prefix ? `My prefix in this guild is: \`${prefix}\`` : 'You do not need a prefix in DMs.');
	}
}

exports.UserEvent = UserEvent;
