const { Client, DiscordAPIError } = require("discord.js");

//const ap = AutoPoster('topggtoken', client) // your discord.js or eris client
module.exports = {
    // Set this to the name of the mod. This is what will be shown inside of Discord Bot Studio.
    // THIS FILE NAME MUST BE THIS VALUE WITH SPACES REMOVED
    name: "Created At",

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
    section: "Variable",

    // Place your html to show inside of Discord Bot Studio when they select your mod.
    html: function(data) {
        return `
            <div class="form-group">
                <label>User: * </label>
                <textarea class="form-control needed-field" name="value" rows="1" ></textarea>
                </div>
                <div class="form-group">
               
                        <label>Save to Variable with Type *</label>
                        <select name="varType" class="form-control">
                            <option value="temp">Temp Variable</option>
                            <option value="server">Server Variable</option>
                            <option value="global">Global Variable</option>
                        </select><br>
                    
                    
                    
                        <label>Variable Name *</label>
                        <input class="form-control" name="storeResult"></input><br>
                    
        `;
    },

    // When the bot is first started, this code will be ran.
    init: function() {
        console.log("Loaded antiraid mod");
    },

    // Place your mod here.
    mod: async function(DBS, message, action, args, command, index) {
     
       var msg = await DBS.BetterMods.parseAction(action.value.replace("${dbsVars.CommandAuthor.id}",message.member.id), message);
        DBS.BetterMods.saveVar(action.vartype, action.storeresult,  message.guild.members.cache.get(msg).user.createdAt, message.guild)

       await DBS.callNextAction(command, message, args, index + 1);

        
      }
};
