const { MessageEmbed } = require("discord.js");
const ServerInfo = require("../schema/ServerInfo");

module.exports = {
    name: "prefix",
    description: "Sets new server prefix for the bot",
    usage: "<prefix>",
    aliases: ["setprefix"],
    type: "utility",

    async execute(message, args, client) {
        let GuildInfo = await ServerInfo.findOneAndUpdate({ GuildId: message.guild.id }, { Prefix: args[0] });

        const SuccessEmbed = new MessageEmbed()
            .setTitle(`✅ Prefix was set to \`${GuildInfo.Prefix}\``)
            .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL() })
            .setColor("GREEN")

        message.reply({ embeds: [SuccessEmbed] })
    }
}