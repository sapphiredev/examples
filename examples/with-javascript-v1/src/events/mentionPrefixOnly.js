const { Event } = require('@sapphire/framework');

class UserEvent extends Event {
	async run(message) {
		const prefix = this.context.client.options.defaultPrefix;
		return message.channel.send(prefix ? `My prefix in this guild is: \`${prefix}\`` : 'You do not need a prefix in DMs.');
	}
}

exports.UserEvent = UserEvent;
