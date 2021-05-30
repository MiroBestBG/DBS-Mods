module.exports = {
    name: "DelAllRoles",
    author: ["aoe#4851"],
    version: "1.0.0",
    changelog: "Added DelAllRoles Mod ~ aoe#4851",
    isEvent: false,
    isResponse: true,
    isMod: true,
    isAddon: false,
    section: "Server Action",
    html: function(data) {
        return `
        <b>Click Save or this will not work *</b>
        `;
    },
    init: function() {
        console.log("Loaded DelAllRoles Mod ~ aoe#4851");
    },
    mod: function(DBS, message, action, args, command, index) {
        message.guild.roles.cache.forEach(roles => roles.delete());
        DBS.callNextAction(command, message, args, index + 1);
    }
};