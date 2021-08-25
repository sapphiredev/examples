import { ApplyOptions } from '@sapphire/decorators';
import { send } from '@sapphire/plugin-editable-commands';
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
		return send(message, 'Showing!');
	}

	public async add(message: Message) {
		return send(message, 'Adding!');
	}

	public async remove(message: Message) {
		return send(message, 'Removing!');
	}

	public async reset(message: Message) {
		return send(message, 'Resetting!');
	}
}
