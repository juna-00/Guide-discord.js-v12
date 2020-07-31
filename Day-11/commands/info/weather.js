const weather = require('weather-js');
const discord = require('discord.js')

module.exports = {
  name: "weather",
  description: "Get the weather of anywhere",
  category: "info",
  usage: "weathet <>",
  run: (client, message, args) => {
    
    
    if(!args.length) {
      return message.channel.send("Tolong beri lokasi nama")
    }
    
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
try {
 
let embed = new discord.MessageEmbed()
.setTitle(`Weather - ${result[0].location.name}`)
.setColor("#ff2050")
.setDescription("Unit suhu dapat berbeda waktu")
.addField("Suhu", `${result[0].current.temperature} Celcius`, true)
.addField("Text Langit", result[0].current.skytext, true)
.addField("Kelembaban", result[0].current.humidity, true)
.addField("Kecepatan Angin", result[0].current.windspeed, true)//What about image
.addField("Waktu Pengamat", result[0].current.observationtime, true)
.addField("Layar Angin", result[0].current.winddisplay, true)
.setThumbnail(result[0].current.imageUrl);
   message.channel.send(embed)
} catch(err) {
  return message.channel.send("Unable To Get the data of Given location")
}
});   
    //LETS CHECK OUT PKG
    
  }
}
