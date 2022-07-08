const { MessageEmbed } = require("discord.js");
const ServerInfo = require("../../schema/ServerInfo");

module.exports = {
    name: "setprefix",
    description: "Sets new channel to use the bot",
    usage: "<channel>",
    type: "utility",

    async execute(message, args, client) {
        let GuildInfo = await ServerInfo.findOneAndUpdate({ GuildId: message.guild.id }, { Prefix: args[0] });

        const SuccessEmbed = new MessageEmbed()
            .setTitle(`✅ Prefix was set to \`${args[0]}\``)
            .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL() })
            .setColor("GREEN")
            .setTimestamp()

        message.reply({ embeds: [SuccessEmbed] })
    }
}