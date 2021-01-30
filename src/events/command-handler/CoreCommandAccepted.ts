import { ApplyOptions } from '@sapphire/decorators';
import { CommandAcceptedPayload, Event, EventOptions, Events } from '@sapphire/framework';

@ApplyOptions<EventOptions>({
	event: Events.CommandAccepted
})
export class CoreEvent extends Event<Events.CommandAccepted> {
	public async run({ message, command, parameters, context }: CommandAcceptedPayload) {
		const args = await command.preParse(message, parameters);
		try {
			message.client.emit(Events.CommandRun, message, command);
			const result = await command.run(message, args, context);
			message.client.emit(Events.CommandSuccess, { message, command, result, parameters });
		} catch (error) {
			message.client.emit(Events.CommandError, error, { piece: command, message });
		} finally {
			message.client.emit(Events.CommandFinish, message, command);
		}
	}
}
