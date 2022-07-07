const { MessageEmbed } = require("discord.js")
const ServerInfo = require("../schema/ServerInfo")

module.exports = {
    name: "prefix",
    description: "Sets new server prefix for the bot",
    usage: "<prefix>",
    aliases: ["setprefix"],
    type: "utility",

    execute(message, args, client) {
        const GuildInfo = 

        if (!args) return message.reply(`The server prefix is \`${}\``)
    }
}