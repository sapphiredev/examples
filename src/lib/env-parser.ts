import { Nullish, isNullish } from '@sapphire/utilities';

function isNullishOrEmpty(value: unknown): value is Nullish | '' {
	return value === '' || isNullish(value);
}

export function envParseArray(key: 'OWNERS', defaultValue?: string[]): string[] {
	const value = process.env[key];
	if (isNullishOrEmpty(value)) {
		if (defaultValue === undefined) throw new Error(`[ENV] ${key} - The key must be an array, but is empty or undefined.`);
		return defaultValue;
	}

	return value.split(' ');
}
