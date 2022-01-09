const Discord = require("discord.js")
reqiure("dotenv").config()

const TOKEN = "OTI5NjU0MDcxMjU2ODIxODYy.Ydqd0g.A9pKAqTWeIL4JFkt6i8oG9x4XoA"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!t")
    }
})

client.login(process.env.TOKEN)