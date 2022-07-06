const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const ServerInfo = new Schema({
    GuildId: { type: Number, require: true, unique: true },
    Words: Array,
    Correct: Number,
    Restarts: Number,
    BotChannel: Number,
    Prefix: String,
});

module.exports = mongoose.model("ServerInfo", ServerInfo);