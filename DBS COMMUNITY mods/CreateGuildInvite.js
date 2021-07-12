module.exports = {
    name: "CreateGuildInvite",
    author: ["aoe#4851"],
    version: "0.0.1",
    changelog: "Added CreateGuildInvite Mod ~ aoe#4851",
    isEvent: false,
    isResponse: true,
    isMod: true,
    isAddon: false,
    section: "Channel Action",
    html: function(data) {
        return `
        <b>Creates a Guild Invite in the Channel where executed</b>
        `;
    },
    init: function() {
        console.log("Loaded CreateGuildInvite Mod ~ aoe#4851");
    },
    mod: function(DBS, message, action, args, command, index) {
        let channel = message.channel;
        channel.createInvite({unique: true})
        .then(invite => { 
           console.log(`New Invite Created in: ` + message.guild.name)
        })

        DBS.callNextAction(command, message, args, index + 1);
        }
    };