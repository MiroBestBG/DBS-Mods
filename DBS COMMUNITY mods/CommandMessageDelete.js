module.exports = {
    // Set this to the name of the mod. This is what will be shown inside of Discord Bot Studio.
    // THIS FILE NAME MUST BE THIS VALUE WITH SPACES REMOVED
    name: "CommandMessageDelete",
  
    // Place the author of the mod here. This is an array so you can add multiple authors.
    author: ["Snorlax"],
  
    // Place the version of the mod here.
    version: "1.0.0",
  
    // Whenever you make a change, place the changelog here.
    changelog: "CommandMessageDelete",
  
    // Set this to true if this will be an event.
    isEvent: false,
  
    // Set this to true if this is a response.
    isResponse: true,
  
    // Set this to true if this will be a response mod.
    isMod: true,
  
    // If you want to modify a core feature, set this to true
    isAddon: false,
  
    // Here you can define where you want your mod to show up inside of Discord Bot Studio (what category in the dropdown when adding a response)
    section: "Message",
  
    // Place your html to show inside of Discord Bot Studio when they select your mod. Each input/select field will be saved to commands.json based on the NAME
    // attribute, so each input must have a NAME attribute.
    html: function (data) {
        return `<div class="form-group cc_cursor">THIS MOD DELETES THE COMMAND MESSAGE</div>`;
    },
  
    // When the bot is first started this code will be ran.
    init: function () {
        console.log("CommandMessageDelete");
    },
  
    // Place your mod here.
    mod: function(DBS, message, action, args, command, index) {
         message.delete()
         DBS.callNextAction(command, message, args, index + 1);
  }
}