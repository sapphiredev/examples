const { Command } = require('@sapphire/framework');
const { PaginatedMessage } = require('@sapphire/discord.js-utilities');
const { send } = require('@sapphire/plugin-editable-commands');
const { MessageEmbed } = require('discord.js');
const { sendLoadingMessage } = require('../../lib/utils');

class UserCommand extends Command {
	constructor(context, options) {
		super(context, {
			...options,
			aliases: ['pm'],
			description: 'A command that uses paginated messages.',
			generateDashLessAliases: true
		});
	}

	async messageRun(message) {
		const response = await sendLoadingMessage(message);

		const paginatedMessage = new PaginatedMessage({
			template: new MessageEmbed()
				.setColor('#FF0000')
				// Be sure to add a space so this is offset from the page numbers!
				.setFooter(' footer after page numbers')
		});

		paginatedMessage
			.addPageEmbed((embed) =>
				embed //
					.setDescription('This is the first page')
					.setTitle('Page 1')
			)
			.addPageBuilder((builder) =>
				builder //
					.setContent('This is the second page')
					.setEmbeds([new MessageEmbed().setTimestamp()])
			);

		await paginatedMessage.run(response, message.author);
		return response;
	}
}

exports.UserCommand = UserCommand;
