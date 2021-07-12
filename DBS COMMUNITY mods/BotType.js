module.exports = {
    // Set this to the name of the mod. This is what will be shown inside of Discord Bot Studio.
    // THIS FILE NAME MUST BE THIS VALUE WITH SPACES REMOVED
    name: "Bot Type",

    // Place the author of the mod here. This is an array so you can add other authors by writing ["Great Plains Modding", "New User"]
    author: ["koki1019#0005"],

    // Place the version of the mod here.
    version: "1.0.1",

    // Whenever you make a change, please place the changelog here with your name. Created Send Message ~ Great Plains Modding\n
    changelog: "",

    // Set this to true if this will be an event.
    isEvent: false,
    
    isResponse: true,

    // Set this to true if this will be a response mod.
    isMod: true,

    // If you want to modify a core feature, set this to true.
    isAddon: false,

    // Here you can define where you want your mod to show up inside of Discord Bot Studio
    section: "Message",

    // Place your html to show inside of Discord Bot Studio when they select your mod.
    html: function(data) {
        return `
           <div class="col">
                <label>How long (seconds) to type</label>
                <input class="form-control" name="time" value="1"></input><br>
           </div>
        `;
    },

    // When the bot is first started, this code will be ran.
    init: function() {
        console.log("Loaded send message");
    },

    // Place your mod here.
    mod: function(DBS, message, action, args, command, index) {
        var delay = action.time * 1000
        message.channel.startTyping();
        setTimeout(function() {
            message.channel.stopTyping();
            DBS.callNextAction(command, message, args, index + 1);
        }, delay);
    }
};