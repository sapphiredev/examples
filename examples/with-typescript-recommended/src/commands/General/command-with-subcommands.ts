import { ApplyOptions } from '@sapphire/decorators';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import type { Message } from 'discord.js';

@ApplyOptions<SubCommandPluginCommandOptions>({
	aliases: ['cws'],
	description: 'A basic command with some subcommands',
	subCommands: ['add', { input: 'create', output: 'add' }, 'remove', 'reset', { input: 'show', default: true }]
})
export class UserCommand extends SubCommandPluginCommand {
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
