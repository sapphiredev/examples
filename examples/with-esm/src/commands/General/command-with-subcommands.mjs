import { send } from '@sapphire/plugin-editable-commands';
import { Subcommand } from '@sapphire/plugin-subcommands';

export class UserCommand extends Subcommand {
	constructor(context, options) {
		super(context, {
			...options,
			aliases: ['cws'],
			description: 'A basic command with some subcommands',
			subcommands: [
				{
					name: 'add',
					messageRun: 'messageAdd'
				},
				{
					name: 'create',
					messageRun: 'messageAdd'
				},
				{
					name: 'remove',
					messageRun: 'messageRemove'
				},
				{
					name: 'reset',
					messageRun: 'messageReset'
				},
				{
					name: 'show',
					messageRun: 'messageShow',
					default: true
				}
			]
		});
	}

	// Anyone should be able to view the result, but not modify
	async messageShow(message) {
		return send(message, 'Showing!');
	}

	async messageAdd(message) {
		return send(message, 'Adding!');
	}

	async messageRemove(message) {
		return send(message, 'Removing!');
	}

	async messageReset(message) {
		return send(message, 'Resetting!');
	}
}
