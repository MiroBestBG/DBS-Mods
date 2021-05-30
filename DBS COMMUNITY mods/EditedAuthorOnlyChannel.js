const { Guild, Client } = require("discord.js");
counter = 0;

module.exports = {
    // Set this to the name of the mod. This is what will be shown inside of Discord Bot Studio.
    // THIS FILE NAME MUST BE THIS VALUE WITH SPACES REMOVED
    name: "Edited Author Only Channel",

    // Place the author of the mod here. This is an array so you can add other authors by writing ["Great Plains Modding", "New User"]
    author: ["STR1KE#4115", "qizzle Schnitzel#9271"],

    // Place the version of the mod here.
    version: "0.1.0",

    // Whenever you make a change, please place the changelog here with your name. Created Send Message ~ Great Plains Modding\n
    changelog: "nothing",

    // Set this to true if this will be an event.
    isEvent: false,
    
    isResponse: true,

    // Set this to true if this will be a response mod.
    isMod: true,

    // If you want to modify a core feature, set this to true.
    isAddon: false,

    // Here you can define where you want your mod to show up inside of Discord Bot Studio
    section: "Channel Action",

    // Place your html to show inside of Discord Bot Studio when they select your mod.
    html: function(data) {
        return `
            <div class="form-group">
                <label>Channel name: *</label>
                <textarea class="form-control needed-field" name="chname" rows="1" ></textarea>
            </div>
            <div class="form-group">
                <label>Catogory id: *</label>
                <textarea class="form-control needed-field" name="chcatogory" rows="1" ></textarea>
            </div>
            <div class="form-group">
                <label>Role id: *</label>
                <textarea class="form-control needed-field" name="chrole" rows="1"></textarea>
            </div>
        `;
    },

    // When the bot is first started, this code will be ran.
    init: function() {
        console.log(">> Loaded Edited Author Only Channel 2.0");
    },

    // Place your mod here.
    mod: function(DBS, message, action, args, command, index) {
        counter++;
        message.guild.channels.create(action.chname + counter, {
            type: 'text',
        }).then(channel => {
            channel.setParent(action.chcatogory);
            channel.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: false,
                VIEW_CHANNEL: false
            })
            channel.updateOverwrite(message.author.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true
            })
            channel.updateOverwrite(action.chrole, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true
            })
        });
        DBS.callNextAction(command, message, args, index + 1);
    }
};
