import { methods, Route } from '@sapphire/plugin-api';

export class UserRoute extends Route {
	constructor(context, options) {
		super(context, {
			...options,
			route: ''
		});
	}

	[methods.GET](_request, response) {
		response.json({ message: 'Landing Page!' });
	}

	[methods.POST](_request, response) {
		response.json({ message: 'Landing Page!' });
	}
}
