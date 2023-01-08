import { sendLoadingMessage } from '#lib/utils';
import { PaginatedMessage } from '@sapphire/discord.js-utilities';
import { Command } from '@sapphire/framework';
import { EmbedBuilder } from 'discord.js';

export class UserCommand extends Command {
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
			template: new EmbedBuilder()
				.setColor('#FF0000')
				// Be sure to add a space so this is offset from the page numbers!
				.setFooter({ text: ' footer after page numbers' })
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
					.setEmbeds([new EmbedBuilder().setTimestamp()])
			);

		await paginatedMessage.run(response, message.author);
		return response;
	}
}
