const { Listener, LogLevel } = require('@sapphire/framework');
const { cyan } = require('colorette');

class UserEvent extends Listener {
	run({ message, command }) {
		const shard = this.shard(message.guild?.shardId ?? 0);
		const commandName = this.command(command);
		const author = this.author(message.author);
		const sentAt = message.guild ? this.guild(message.guild) : this.direct();
		this.container.logger.debug(`${shard} - ${commandName} ${author} ${sentAt}`);
	}

	onLoad() {
		this.enabled = this.container.logger.level <= LogLevel.Debug;
		return super.onLoad();
	}

	shard(id) {
		return `[${cyan(id.toString())}]`;
	}

	command(command) {
		return cyan(command.name);
	}

	author(author) {
		return `${author.username}[${cyan(author.id)}]`;
	}

	direct() {
		return cyan('Direct Messages');
	}

	guild(guild) {
		return `${guild.name}[${cyan(guild.id)}]`;
	}
}

module.exports = {
	UserEvent
};
