const { send } = require('@sapphire/plugin-editable-commands');
const { EmbedBuilder } = require('discord.js');
const { RandomLoadingMessage } = require('./constants');

function pickRandom(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function sendLoadingMessage(message) {
	return send(message, { embeds: [new EmbedBuilder().setDescription(pickRandom(RandomLoadingMessage)).setColor('#FF0000')] });
}

module.exports = {
	pickRandom,
	sendLoadingMessage
};
