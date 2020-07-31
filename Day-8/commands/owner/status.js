const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "status",
  description: "Change the bot status",
  usage: "status <here>",
  category: "owner",
  run: async (client, message, args) => {
    
    //OWNER ONLY COMMAND
    if(!message.author.id === "YOUR ID") {
      return message.channel.send("perintah / command ini hanya dapat digunakan oleh pemilik bot/server")
    }
    //ARGUMENT
    if(!args.length) {
      return message.channel.send("tolong beri pesan status")
    }
    
 db.set(`status`, args.join(" "))
   await message.channel.send("Updated the bot status")
    process.exit(1);
    
  }
}
