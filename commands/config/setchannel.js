const { MessageEmbed } = require("discord.js");
const ServerInfo = require("../../schema/ServerInfo");

module.exports = {
    name: "setchannel",
    description: "Sets new server prefix for the bot",
    usage: "<prefix>",
    aliases: ["setprefix"],
    type: "utility",

    async execute(message, args, client) {

        let newBotChannel = await message.guild.channels.cache.get(args[0].substring(2).substring(0,18)) || message.channel.id
        let GuildInfo = await ServerInfo.findOneAndUpdate({ GuildId: message.guild.id }, { BotChannel: newBotChannel });

        const SuccessEmbed = new MessageEmbed()
            .setTitle(`✅ Bots channel was set to ${newBotChannel}`)
            .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL() })
            .setColor("GREEN")

        message.reply({ embeds: [SuccessEmbed] })
    }
}