import { ApplyOptions } from '@sapphire/decorators';
import { Event, EventOptions, Events, isErr, PreCommandRunPayload, UserError } from '@sapphire/framework';

@ApplyOptions<EventOptions>({
	event: Events.PreCommandRun
})
export class CoreEvent extends Event<Events.PreCommandRun> {
	public async run(payload: PreCommandRunPayload) {
		const { message, command, parameters, context } = payload;
		if (!command.enabled) {
			message.client.emit(
				Events.CommandDenied,
				new UserError({ identifier: 'CommandDisabled', message: 'This command is disabled.', context: payload }),
				{
					message,
					command,
					parameters,
					context
				}
			);
			return;
		}

		const result = await command.preconditions.run(message, command);
		if (isErr(result)) {
			message.client.emit(Events.CommandDenied, result.error, payload);
		} else {
			message.client.emit(Events.CommandAccepted, payload);
		}
	}
}
