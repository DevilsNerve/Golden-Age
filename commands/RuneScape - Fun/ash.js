const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, { description: 'Random Mod Ash gif.' });
	}

	async run(msg) {
		return msg.send(links[Math.floor(Math.random() * links.length)]);
	}

};

const links = [
	'http://i.imgur.com/d88EtsT.gifv',
	'http://i.imgur.com/sGwPKDa.gifv',
	'https://i.imgur.com/HKWM8W8.gifv',
	'https://i.imgur.com/nVXBj8y.gifv',
	'http://i.imgur.com/6WH1an0.gifv',
	'https://i.imgur.com/W3E4SOD.gifv',
	'http://i.imgur.com/RhvX5lD.gifv',
	'https://i.imgur.com/cyfdWoB.gifv',
	'https://i.imgur.com/Opwpa4q.gifv',
	'https://i.imgur.com/h6Is7d5.gifv',
	'http://i.imgur.com/qWMNJM3.gifv',
	'https://i.imgur.com/yfiIeXf.gifv',
	'https://i.imgur.com/60zHtY1.gifv',
	'http://i.imgur.com/1JMNzJm.gifv',
	'https://i.imgur.com/3WOEnMd.gifv',
	'https://i.imgur.com/aDGCoWB.gifv',
	'https://gfycat.com/pleasantlonedipper',
	'https://gfycat.com/tiredgenuinecommabutterfly',
	'https://gfycat.com/timelylivebanteng',
	'https://gfycat.com/favorablebossyflyinglemur'
];
