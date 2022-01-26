import { methods, Route } from '@sapphire/plugin-api';

export class UserRoute extends Route {
	constructor(context, options) {
		super(context, {
			...options,
			route: 'hello-world'
		});
	}

	[methods.GET](_request, response) {
		response.json({ message: 'Hello World' });
	}

	[methods.POST](_request, response) {
		response.json({ message: 'Hello World' });
	}
}
