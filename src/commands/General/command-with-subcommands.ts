import { RequiresDMContext, RequiresGuildContext, RequiresPermissions } from '@sapphire/decorators';
import type { PieceContext } from '@sapphire/pieces';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import type { Message } from 'discord.js';

export class UserCommand extends SubCommandPluginCommand {
	public constructor(context: PieceContext, options: SubCommandPluginCommandOptions) {
		super(context, {
			...options,
			aliases: ['cws'],
			description: 'A basic command with some subcommands',
			subCommands: ['add', { input: 'create', output: 'add' }, 'remove', 'reset', { input: 'show', default: true }]
		});
	}

	// Anyone should be able to view the result, but not modify
	public async show(message: Message) {
		return message.channel.send('Showing!');
	}

	@RequiresPermissions('MANAGE_MESSAGES') // This command should only be available to fictive staff people, those who can ban people.
	public async add(message: Message) {
		return message.channel.send('Adding!');
	}

	@RequiresGuildContext((message: Message) => message.channel.send('This command can only be used in servers'))
	public async remove(message: Message) {
		return message.channel.send('Removing!');
	}

	@RequiresDMContext((message: Message) => message.channel.send('This command can only be used in DMs'))
	public async reset(message: Message) {
		return message.channel.send('Resetting!');
	}
}
