import { Route } from '@sapphire/plugin-api';

export class UserRoute extends Route {
	run(_request, response) {
		response.json({ message: 'Hello World' });
	}
}
