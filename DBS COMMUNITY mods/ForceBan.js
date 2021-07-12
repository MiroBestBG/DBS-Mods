module.exports = {
    name: "ForceBan",
    author: ["aoe#4851"],
    version: "1.0.0",
    changelog: "Added ForceBan Mod ~ aoe#4851",
    isEvent: false,
    isResponse: true,
    isMod: true,
    isAddon: false,
    section: "User Action",
    html: function(data) {
        return `
        <div class="form-group">
            <label>The User(use $$user$$ to get a mentioned user) *</label>
            <textarea class="form-control needed-field" name="user" rows="1" ></textarea>
        </div>
        <div class="form-group">
            <label>The reason fo the forceban *</label>
            <textarea class="form-control needed-field" name="reason1" rows="1" ></textarea>
        </div>
        <div class="form-group">
            <label>Color of the Embed *</label>
            <textarea class="form-control needed-field" name="color" rows="1" ></textarea>
        </div>
        <div class="form-group">
            <label>The Description of the Embed *</label>
            <textarea class="form-control needed-field" name="desc" rows="1" ></textarea>
        </div>
        `;
    },
    init: function() {
        console.log("Loaded CreateCategory Mod ~ aoe#4851");
    },
    mod: function(DBS, message, action, args, command, index) {
        const Discord = require("discord.js");
        var target = action.user;
        target = target.replace("$$user$$", args);
        var reason = action.reason1
        message.guild.members.ban(target, {reason: reason.length < 1 ? 'No reason supplied.': reason});
        const embed = new Discord.MessageEmbed()
        .setColor(action.Color)
        .setDescription(action.desc);
        message.channel.send(embed);   
    DBS.callNextAction(command, message, args, index + 1);
    }
};