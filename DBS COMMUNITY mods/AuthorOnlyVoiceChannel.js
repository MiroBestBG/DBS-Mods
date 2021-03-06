const { Guild, Client } = require("discord.js");
counter = 0;

module.exports = {
    // Set this to the name of the mod. This is what will be shown inside of Discord Bot Studio.
    // THIS FILE NAME MUST BE THIS VALUE WITH SPACES REMOVED
    name: "AuthorOnlyVoiceChannel",

    // Place the author of the mod here. This is an array so you can add other authors by writing ["Great Plains Modding", "New User"]
    author: ["zCuzImJonas#1010"],

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
                <label>Channel Name: *</label>
                <textarea class="form-control needed-field" name="chname" rows="1" ></textarea>
            </div>
            <div class="form-group">
                <label>Catogory ID: *</label>
                <textarea class="form-control needed-field" name="chcatogory" rows="1" ></textarea>
            </div>
            <div class="form-group">
                <label>Role ID: *</label>
                <textarea class="form-control needed-field" name="chrole" rows="1"></textarea>
            </div>
        `;
    },

    // When the bot is first started, this code will be ran.
    init: function() {
        console.log(">> Loaded Edited Author Only Channel");
    },

    // Place your mod here.
    mod: function(DBS, message, action, args, command, index) {
        message.guild.channels.create(action.chname, {
            type: 'voice',
        }).then(channel => {
            channel.setParent(action.chcatogory);
            channel.updateOverwrite(message.guild.roles.everyone, {
                CONNECT: false
            })
            channel.updateOverwrite(message.author.id, {
                CONNECT: true,
                SPEAK: true
            })
            channel.updateOverwrite(action.chrole, {
                CONNECT: true,
                SPEAK: true
            })
        });
        DBS.callNextAction(command, message, args, index + 1);
    }
};
