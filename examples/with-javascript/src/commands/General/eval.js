const { Command } = require('@sapphire/framework');
const { send } = require('@sapphire/plugin-editable-commands');
const { Type } = require('@sapphire/type');
const { codeBlock, isThenable } = require('@sapphire/utilities');
const { inspect } = require('node:util');

class UserCommand extends Command {
	constructor(context, options) {
		super(context, {
			...options,
			aliases: ['ev'],
			description: 'Evals any JavaScipt code',
			quotes: [],
			preconditions: ['OwnerOnly'],
			flags: ['async', 'hidden', 'showHidden', 'silent', 's'],
			options: ['depth']
		});
	}

	async messageRun(message, args) {
		const code = await args.rest('string');

		const { result, success, type } = await this.eval(message, code, {
			async: args.getFlags('async'),
			depth: Number(args.getOption('depth')) ?? 0,
			showHidden: args.getFlags('hidden', 'showHidden')
		});

		const output = success ? codeBlock('js', result) : `**ERROR**: ${codeBlock('bash', result)}`;
		if (args.getFlags('silent', 's')) return null;

		const typeFooter = `**Type**: ${codeBlock('typescript', type)}`;

		if (output.length > 2000) {
			return send(message, {
				content: `Output was too long... sent the result as a file.\n\n${typeFooter}`,
				files: [{ attachment: Buffer.from(output), name: 'output.js' }]
			});
		}

		return send(message, `${output}\n${typeFooter}`);
	}

	async eval(message, code, flags) {
		if (flags.async) code = `(async () => {\n${code}\n})();`;

		const msg = message;

		let success = true;
		let result = null;

		try {
			// eslint-disable-next-line no-eval
			result = eval(code);
		} catch (error) {
			if (error && error instanceof Error && error.stack) {
				this.container.client.logger.error(error);
			}
			result = error;
			success = false;
		}

		const type = new Type(result).toString();
		if (isThenable(result)) result = await result;

		if (typeof result !== 'string') {
			result = inspect(result, {
				depth: flags.depth,
				showHidden: flags.showHidden
			});
		}

		return { result, success, type };
	}
}

module.exports = {
	UserCommand
};
