const { Listener } = require('@sapphire/framework');

class UserEvent extends Listener {
	run(old, message) {
		// If the contents of both messages are the same, return:
		if (old.content === message.content) return;

		// If the message was sent by a webhook, return:
		if (message.webhookId !== null) return;

		// If the message was sent by the system, return:
		if (message.system) return;

		// If the message was sent by a bot, return:
		if (message.author.bot) return;

		// Run the message parser.
		this.container.client.emit('preMessageParsed', message);
	}
}

module.exports = {
	UserEvent
};
