// Init
var Discord = require("discord.js");
var bot = new Discord.Client();

const ids = require("./ids");

// Handlers
var handlerMsg = require("./handlerMsg");
var handlerUsers = require("./handlerUsers");
var handlerReaction = require("./handlerReaction");

// Bot Init
bot.on("ready", () => {
    console.log("Bot iniciado");
    console.log("Node Version: " + process.version);
    console.log("Discord.js Version: " + Discord.version);

    // Catch reaction message
    bot.channels.cache.get(ids.rolChannelId).messages.fetch(ids.rolMessageId);

});

// Receive Messages
bot.on("message", message => {
    handlerMsg.analizar(message);
});

// New members
bot.on("guildMemberAdd", member =>{
    handlerUsers.newUser(member);
});

// Add Reaction
bot.on("messageReactionAdd", (reaction,user) => {
    handlerReaction.addRole(reaction,user);
});

// Remove Reaction
bot.on("messageReactionRemove", (reaction,user) => {
    handlerReaction.removeRole(reaction,user);
});

bot.login(process.env.DISCORD_BOT_KEY);
