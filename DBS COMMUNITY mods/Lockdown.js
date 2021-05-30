module.exports = {
    name: "Lockdown",
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
            <select class="form-control" name="bool">
                <option value="on" selected>ON</option>
                <option value="off" selected>OFF</option>
            </select>
            <label id="authormark">|| by qizzle Schnitzel#9271</label>
        </div>
        `;
    },
    init: function() {
        console.log(">> Lockdown Mod loaded. by qizzle");
    },
    mod: function(DBS, message, action, args, command, index) {
        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category')
        switch (action.bool) {
            case "on":
                channels.forEach(channel => {
                    channel.updateOverwrite(message.guild.roles.everyone, {
                        SEND_MESSAGES: false,
                        CONNECT: false
                    })
                })    
            break;
            case "off":
                channels.forEach(channel => {
                    channel.updateOverwrite(message.guild.roles.everyone, {
                        SEND_MESSAGES: true,
                        CONNECT: true
                    })
                })
            break;
        }
        DBS.callNextAction(command, message, args, index + 1);
    }
};
