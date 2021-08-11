import { PaginatedMessage } from '@sapphire/discord.js-utilities';
import { Command, CommandOptions, PieceContext } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { sendLoadingMessage } from '../../lib/utils';

export class UserCommand extends Command {
	public constructor(context: PieceContext, options: CommandOptions) {
		super(context, {
			...options,
			aliases: ['pm'],
			description: 'A command that uses paginated messages.',
			generateDashLessAliases: true
		});
	}

	public async run(message: Message) {
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
