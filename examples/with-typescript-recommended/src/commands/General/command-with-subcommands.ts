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

	public async add(message: Message) {
		return message.channel.send('Adding!');
	}

	public async remove(message: Message) {
		return message.channel.send('Removing!');
	}

	public async reset(message: Message) {
		return message.channel.send('Resetting!');
	}
}
