module.exports = {
    name: "SetChannelPos",
    author: ["aoe#4851"],
    version: "0.0.1",
    changelog: "Added the Ability to set a new Pos for a Channel ~ aoe#4851",
    isEvent: false,
    isResponse: true,
    isMod: true,
    isAddon: false,
    section: "Channel Action",
    html: function(data) {
        return `
        <div class="form-group">
            <label>New Channel Position(Use $$pos$$ to get the last Position of the Channel where executed) *</label>
            <textarea class="form-control needed-field" name="newpos" rows="1" ></textarea>
        </div>
        `;
    },
    init: function() {
        console.log("Loaded SetChannelPos Mod ~ aoe#4851");
    },
    mod: function(DBS, message, action, args, command, index) {
    var pos = action.newpos;
    pos = pos.replace("$$pos$$", message.channel.position);
    message.channel.setPosition(pos)
    DBS.callNextAction(command, message, args, index + 1);
    }
};
