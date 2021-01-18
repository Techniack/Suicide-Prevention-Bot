// require the needed modules
const Discord = require('discord.js');
const { Menu } = require('discord.js-menu');
const { prefix, version, acknowledgments, support} = require('./config.json');
const { token, testToken} = require('./tokens.json');
const { TriggerWords } = require('./triggerwords.json');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Bot Ready!');
	console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', message => {
  if (message.author.bot) return;

	const string = message.content;
	const terms = TriggerWords

	if(new RegExp(terms.join("|")).test(string) === true) {
		const user = message.author;
		message.channel.send(`${user}, Please check your DM's`);
		message.author.send(`Hello ${user}, I hope you are doing OK. I noticed that some messages you sent talk about depression and/or suicide. I just wanted to let you know that there is help availible.`);
		message.author.send("If you are in the US, Please call `1-800-273-8255` for assistance. If you are outside the US, please consult the guide below for more information:");
		message.author.send(`https://www.opencounseling.com/suicide-hotlines`);
		message.author.send("If you would like to speek with a human, Please type `s.human`");
}});
// login to Discord with your app's token
client.login(token);
