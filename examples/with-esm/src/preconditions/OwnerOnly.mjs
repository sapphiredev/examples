import config from '#rootJson/config' assert { type: 'json' };
import { AllFlowsPrecondition } from '@sapphire/framework';

export class UserPrecondition extends AllFlowsPrecondition {
	#message = 'This command can only be used by the owner.';

	/**
	 * @param {import('discord.js').CommandInteraction} interaction
	 */
	chatInputRun(interaction) {
		return this.doOwnerCheck(interaction.user.id);
	}

	/**
	 * @param {import('discord.js').ContextMenuCommandInteraction} interaction
	 */
	contextMenuRun(interaction) {
		return this.doOwnerCheck(interaction.user.id);
	}

	/**
	 * @param {import('discord.js').Message} message
	 */
	messageRun(message) {
		return this.doOwnerCheck(message.author.id);
	}

	/**
	 * @param {import('discord.js').Snowflake} userId
	 */
	doOwnerCheck(userId) {
		return config.owners.includes(userId) ? this.ok() : this.error({ message: this.#message });
	}
}
