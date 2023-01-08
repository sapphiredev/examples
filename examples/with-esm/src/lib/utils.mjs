import { RandomLoadingMessage } from '#lib/constants';
import { send } from '@sapphire/plugin-editable-commands';
import { EmbedBuilder } from 'discord.js';

export function pickRandom(array) {
	return array[Math.floor(Math.random() * array.length)];
}

export function sendLoadingMessage(message) {
	return send(message, { embeds: [new EmbedBuilder().setDescription(pickRandom(RandomLoadingMessage)).setColor('#FF0000')] });
}
