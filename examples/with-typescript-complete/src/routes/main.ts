import { ApplyOptions } from '@sapphire/decorators';
import { Route, methods, type ApiRequest, type ApiResponse } from '@sapphire/plugin-api';

@ApplyOptions<Route.Options>({ route: `` })
export class UserRoute extends Route {
	public override [methods.GET](_request: ApiRequest, response: ApiResponse) {
		response.json({ message: 'Landing Page!' });
	}

	public override [methods.POST](_request: ApiRequest, response: ApiResponse) {
		response.json({ message: 'Landing Page!' });
	}
}
