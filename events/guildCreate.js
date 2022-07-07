const { MessageEmbed } = require('discord.js');
const ServerInfo = require("../schema/ServerInfo");

module.exports = {
    name: 'guildCreate',
    async execute(guild, client) {
        const channel = guild.channels.cache.filter(chx => chx.type === "GUILD_TEXT").find(x => x.position === 0);
        const WelcomeEmbed = new MessageEmbed()
            .setDescription("Somethings to do before starting.")
            .addField("`-prefix`", `Use this to set a prefix default is \`${client.prefix}\``, true)
            .addField("`-setchannel`", "Set a channel to start using the bot!", true)
            .setTimestamp()
            .setFooter({ text: "Thank you for using this bot" })
            .setColor("RED")

        let guildExist = await ServerInfo.exists({ GuildId: guild.id }); 

        if (guildExist) {
            console.log("Guild already exists!")
            WelcomeEmbed.setTitle("Welcome to the ABC Discord Bot.")
        } else {
            const guildData = await ServerInfo.create({
                GuildId: guild.id,
                Words: [],
                Correct: 0,
                Restarts: 0,
                BotChannel: 0,
                Prefix: "-"
            })
    
            console.log(guild.id + " data created!")
            WelcomeEmbed.setTitle("Welcome back to the ABC Discord Bot.")
        }

        channel.send({ embeds: [WelcomeEmbed] })
    }
}