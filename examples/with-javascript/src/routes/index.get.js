const { Route } = require('@sapphire/plugin-api');

class UserRoute extends Route {
	run(_request, response) {
		response.json({ message: 'Landing Page!' });
	}
}

module.exports = {
	UserRoute
};
