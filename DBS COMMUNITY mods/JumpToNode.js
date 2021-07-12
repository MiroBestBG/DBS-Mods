const { Client, DiscordAPIError } = require("discord.js");

//const ap = AutoPoster('topggtoken', client) // your discord.js or eris client
module.exports = {
    // Set this to the name of the mod. This is what will be shown inside of Discord Bot Studio.
    // THIS FILE NAME MUST BE THIS VALUE WITH SPACES REMOVED
    name: "JumpToNode",

    // Place the author of the mod here. This is an array so you can add other authors by writing ["Great Plains Modding", "New User"]
    author: ["STR1KE#6969"],

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
    section: "Bot Action",

    // Place your html to show inside of Discord Bot Studio when they select your mod.
    html: function(data) {
        return `
            <div class="form-group">
                <label>Response name: * </label>
                <textarea class="form-control needed-field" name="value" rows="1" ></textarea>
                </div>
                    
        `;
    },

    // When the bot is first started, this code will be ran.
    init: function() {
        console.log("Loaded JumpToNode");
    },

    // Place your mod here.
    mod: async function(DBS, message, action, args, command, index) {
       DBS.callNextAction(command, message, args, command.actions.indexOf(command.actions.find(e=>e.name==action.value)));

        
      }
};
