const { MessageEmbed } = require("discord.js")
const ServerInfo = require(".../schema/ServerInfo")

module.exports = {
    name: "prefix",
    description: "Sets new server prefix for the bot",
    usage: "<prefix>",
    aliases: ["setprefix"],
    type: "utility",

    execute(message, args, client) {
        ServerInfo.updateOne({ GuildId: GuildId }, { Prefix: args[0]}, { upsert: true })
        
        const SuccessEmbed = new MessageEmbed()
            .setTitle(`✅ Prefix was set to \`${args[0]}\``)
            .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL() })
            .setColor("GREEN")

        message.reply({ embeds: [SuccessEmbed] })
    }
}