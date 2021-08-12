const { isNullishOrEmpty } = require('@sapphire/utilities');

function envParseArray(key, defaultValue = null) {
	const value = process.env[key];
	if (isNullishOrEmpty(value)) {
		if (defaultValue === undefined) throw new Error(`[ENV] ${key} - The key must be an array, but is empty or undefined.`);
		return defaultValue;
	}

	return value.split(' ');
}

module.exports = {
	envParseArray
};
