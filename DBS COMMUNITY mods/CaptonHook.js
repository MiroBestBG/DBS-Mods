module.exports = {
    // Set this to the name of the mod. This is what will be shown inside of Discord Bot Studio.
    // THIS FILE NAME MUST BE THIS VALUE WITH SPACES REMOVED
    name: "Capton Hook",

    // Place the author of the mod here. This is an array so you can add other authors by writing ["Great Plains Modding", "New User"]
    author: ["KeksGauner#0624"],

    // Place the version of the mod here.
    version: "1.0.0",

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
    section: "Message",

    // Place your html to show inside of Discord Bot Studio when they select your mod.
    html: function(data) {
        return `
            <div class="form-group">
                <div class="row">
                    <div class="col">
                        <label>Webhook Username</label>
                        <input class="form-control" name="webhookusername" value="Spidey Bot"></input><br>
                    </div>
                    <div class="col">
                        <label>Webhook URL</label>
                        <input class="form-control" name="webhookurl" value="https://discord.com/api/webhooks/[ID]/[Thoken]"></input><br>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label>Variable Type *</label>
                        <select name="vartype" class="form-control">
                            <option value="temp">Temp Variable</option>
                            <option value="server">Server Variable</option>
                            <option value="global">Global Variable</option>
                        </select><br>
                    </div>

                    <div class="col">
                        <label>Variable Name *</label>
                        <input class="form-control" name="storeresult" value="myVar"></input><br>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label>Webhook Title *</label>
                        <input class="form-control" name="webhooktitle" value="Yay we did something right"></input><br>
                    </div>
                    <div class="col">
                        <label>Webhook Color *</label>
                        <input class="form-control" name="webhookusercolor" value="#ffe900"></input><br>
                    </div>
                </div>

                <p>Having issues? Press <code>Alt + F4</code> and go to Bed<br>
                Create a Webhook; Example https://discord.com/api/webhooks/[ID]/[Thoken]
                </p>
            </div>
        `;
    },

    // When the bot is first started, this code will be ran.
    init: function(DBS) {
        console.log("Loaded Capton Hook");
        DBS.BetterMods.requireModule("webhook-discord");
    },

    // Place your mod here.
    mod: async function(DBS, message, action, args, command, index) {
        const webhook = require("webhook-discord");

        const result = DBS.BetterMods.getVar(action.vartype,  action.storeresult, message.guild);

        try {
            const Hook = new webhook.Webhook(action.webhookurl);
            //Hook.success("WEBHOOK TEST","Yay we did something right");


            const msg = new webhook.MessageBuilder()
                .setName(action.webhookusername)
                .setColor(action.webhookusercolor)
                .setTitle(action.webhooktitle)
                .setDescription(result);
            Hook.send(msg);

        } catch (e) {
            console.log('Error trying to send: ', e);
        };

        DBS.callNextAction(command, message, args, index + 1);
    }
};