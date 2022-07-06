const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const UserProfile = new Schema({
    User: { type: String, require: true, unique: true },
    Fails: Number,
    Success: Number,
});

module.exports = mongoose.model("UserProfile", UserProfile);