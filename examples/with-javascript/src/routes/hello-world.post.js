const { Route } = require('@sapphire/plugin-api');

class UserRoute extends Route {
	run(_request, response) {
		response.json({ message: 'Hello World' });
	}
}

module.exports = {
	UserRoute
};
