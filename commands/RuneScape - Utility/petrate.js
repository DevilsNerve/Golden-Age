const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Shows the rates of getting skilling pets at certain levels.',
			usage: '<skillLevel:int{1,99}> <hunter|woodcutting|agility|fishing|mining|thieving|farming>',
			usageDelim: ' '
		});
	}

	async run(msg, [skillLevel, petName]) {
		return msg.send(this.rate(rates[petName], skillLevel));
	}

	rate(obj, lvl) {
		const rates = [];
		for (const thing in obj) {
			rates.push(`**${thing}:** ${(obj[thing] - (lvl * 25)).toLocaleString()}`);
		}
		return rates.join('\n');
	}

};

const rates = {
	hunter: {
		'Grey chinchompas': 131395,
		'Red chinchompas': 98373,
		'Black chinchompas': 82758
	},
	woodcutting: {
		'Regular Tree': 317647,
		'Oak Tree': 361146,
		'Willow Tree': 289286,
		'Maple Tree': 221918,
		'Yew Tree': 145013,
		'Magic & Redwood Trees': 72321
	},
	agility: {
		'Gnome Stronghold Course': 35609,
		'Agility Pyramid': 9901,
		'Draynor Village Rooftop': 33005,
		'Varrock Rooftop': 24410,
		'Seers\' Village': 35205,
		'East Ardougne Rooftop': 34440
	},
	fishing: {
		'Shrimp/Anchovies': 435165,
		'Trout/Salmon': 461808,
		'Tuna/Swordfish': 128885,
		Lobster: 116129,
		Monkfish: 138583,
		'Leaping Fish': 426954,
		Sharks: 82243,
		Minnow: 977778,
		'Fishing Trawler': 5000
	},
	runecrafting: {
		'Blood runes': 804984,
		'Soul runes': 782999,
		'Ourania Altar/ZMI': 1487213,
		'Everything Else': 1795758
	},
	mining: {
		'Copper/Tin/Clay/Iron/Silver': 741600,
		Gold: 296640,
		Sandstone: 741600,
		Mithril: 148320,
		Adamantite: 59328,
		Runite: 42377,
		'Blast Mine': 123600,
		'Motherlode Mine': 247200
	},
	thieving: {
		'Cake Stall': 124066,
		'Silk Stall': 68926,
		'Hero/Elf Pickpocket': 99175,
		'Ardougne Knight/Man Pickpocket': 257211

	},
	farming: {
		'Magic Tree': 9368,
		'Yew Trees': 11242,
		'All Fruit Trees': 9000,
		'All Herbs': 98364,
		'Tithe Farm': 7494389
	}
};
