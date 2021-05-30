module.exports = {
    name: "Unlock One Channel",
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
            #authormark { margin-top:5px; }
        </style>
        <div class="form-group">
            <select class="form-control" name="torv">
                <option value="text" selected>Text Channel</option>
                <option value="voice">Voice Channel</option>
            </select>
        </div>
        <div class="form-group">
            <textarea class="form-control needed-field" name="channelname" rows="1" placeholder="Channel Name"></textarea>
            <label id="authormark">|| by qizzle Schnitzel#9271</label>
        </div>
        `;
    },
    init: function() {
        console.log(">> Voice Channel Propeties Mod loaded. by qizzle");
    },
    mod: function(DBS, message, action, args, command, index) {
        var name = action.channelname;
        var guild = message.guild;
        const channel = guild.channels.cache.find((channel) => {
            return channel.name === name;
        })
        if (!channel) {
            return;
        }
        switch (action.torv) {
            case "text":
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                })
                break;
            case "voice":
                channel.updateOverwrite(message.guild.roles.everyone, {
                    CONNECT: true
                })
                break;
        }
        DBS.callNextAction(command, message, args, index + 1);
    }
};
