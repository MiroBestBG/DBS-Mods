module.exports = {
    name: "User Limit",
    author: ["qizzle Schnitzel#9271"],
    version: "0.0.1",
    changelog: "Nothing ~ qizzle",
    isEvent: false,
    isResponse: true,
    isMod: true,
    isAddon: false,
    section: "Channel Action",
    html: function(data) {
        return `
        <style>
            label { margin-top:5px; }
        </style>
        <div class="form-group">
            <textarea class="form-control needed-field" name="channelname" rows="1" placeholder="Voice Channel Name"></textarea>
        </div>
        <div class="form-group">
            <textarea class="form-control needed-field" name="channellimit" rows="1" placeholder="User Limit"></textarea>
            <label style>|| by qizzle Schnitzel#9271</label>
        </div>
        `;
    },
    init: function() {
        console.log(">> Voice Channel Propeties Mod loaded. by qizzle");
    },
    mod: function(DBS, message, action, args, command, index) {
        var name = action.channelname;
        var limit = action.channellimit;
        var guild = message.guild;
        const channel = guild.channels.cache.find((channel) => {
            return channel.name === name;
        })
        if (!channel) {
            return;
        }
        channel.edit({ userLimit: limit })
        DBS.callNextAction(command, message, args, index + 1);
    }
};
