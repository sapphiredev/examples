import type { CommandDeniedPayload } from '@sapphire/framework';
import { Event, UserError } from '@sapphire/framework';

export class UserEvent extends Event<'commandDenied'> {
	public async run({ context, message: content }: UserError, { message }: CommandDeniedPayload) {
		if (Reflect.get(Object(context), 'silent')) return;

		return message.channel.send(content, { allowedMentions: { users: [message.author.id], roles: [] } });
	}
}
