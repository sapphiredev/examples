const { SubCommandPluginCommand } = require('@sapphire/plugin-subcommands');
const { send } = require('@sapphire/plugin-editable-commands');

class UserCommand extends SubCommandPluginCommand {
	constructor(context, options) {
		super(context, {
			...options,
			aliases: ['cws'],
			description: 'A basic command with some subcommands',
			subCommands: ['add', { input: 'create', output: 'add' }, 'remove', 'reset', { input: 'show', default: true }]
		});
	}

	// Anyone should be able to view the result, but not modify
	async show(message) {
		return send(message, 'Showing!');
	}

	async add(message) {
		return send(message, 'Adding!');
	}

	async remove(message) {
		return send(message, 'Removing!');
	}

	async reset(message) {
		return send(message, 'Resetting!');
	}
}

exports.UserCommand = UserCommand;
