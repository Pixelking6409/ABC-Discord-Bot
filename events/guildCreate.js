const { MessageEmbed } = require('discord.js');
const ServerInfo = require("../schema/ServerInfo");

module.exports = {
    name: 'guildCreate',
    execute(guild, client) {
        const channel = guild.channels.cache.first()
        const WelcomeEmbed = MessageEmbed()
            .setTitle("Welcome to the ABC Discord Bot.")
            .setDescription("Somethings to do before starting.")
            .addField("`-prefix`", "Use this to set a prefix default is `!`", true)
            .addField("`-setchannel`", "Set a channel to start using the bot!", true)
            .setTimestamp()
            .setFooter("Thank you for using this bot")

        var guildData = new ServerInfo({
            GuildId: guild.id,
            Words: [],
            Correct: 0,
            Restarts: 0,
            BotChannel: 0,
            Prefix: "-"
        })

        console.log(guild.id + " data created")
        channel.send({ embeds: [WelcomeEmbed] })
    }
}