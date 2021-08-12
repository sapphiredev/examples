import { ApplyOptions, RequiresDMContext, RequiresGuildContext, RequiresClientPermissions } from '@sapphire/decorators';
import { SubCommandPluginCommand, SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import { Message, MessageEmbed } from 'discord.js';

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

	@RequiresClientPermissions('EMBED_LINKS') // This sub-command requires the bot to have EMBED_LINKS permission because it sends a MessageEmbed
	public async add(message: Message) {
		const embed = new MessageEmbed() //
			.setColor('#3986E4')
			.setDescription('Added!')
			.setTitle('Configuration Log')
			.setTimestamp();

		return message.channel.send({ embeds: [embed] });
	}

	@RequiresGuildContext((message: Message) => message.channel.send('This sub-command can only be used in servers'))
	public async remove(message: Message) {
		return message.channel.send('Removing!');
	}

	@RequiresDMContext((message: Message) => message.channel.send('This sub-command can only be used in DMs'))
	public async reset(message: Message) {
		return message.channel.send('Resetting!');
	}
}
