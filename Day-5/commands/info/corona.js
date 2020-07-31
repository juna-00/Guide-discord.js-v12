const discord = require("discord.js")
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();

module.exports = {
  name: "corona",
  category: "info",
  description: "Get the stats of corona",
  usage: "corona all or corona <country>",
  aliases: ["covid", "covid19"],
  run: async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please give the name of country")
    }
    
    if(args.join(" ") === "all") {
      let corona = await track.all() //it will give global cases
      
      let embed = new discord.MessageEmbed()
      .setTitle("Corona Global")
      .setColor("#ff2050")
      .setDescription("terkadang jumlah kasus mungkin berbeda dari jumlah kecil")
      .addField("Total Positif", corona.cases, true)
      .addField("Total Meninggal", corona.deaths, true)
      .addField("Total Sembuh", corona.recovered, true)
      .addField("Positif Hari Ini", corona.todayCases, true)
      .addField("Meninggal Hari Ini", corona.todayDeaths, true)
      .addField("Positif Aktif", corona.active, true);
      
      return message.channel.send(embed)
      
      
      
    } else {
      let corona = await track.countries(args.join(" ")) //change it to countries
      
      let embed = new discord.MessageEmbed()
      .setTitle(`${corona.country}`)
      .setColor("#ff2050")
      .setDescription("terkadang jumlah kasus mungkin berbeda dari jumlah kecil")
      .addField("Total Positif", corona.cases, true)
      .addField("Total Meninggal", corona.deaths, true)
      .addField("Total Sembuh", corona.recovered, true)
      .addField("Positif Hari Ini", corona.todayCases, true)
      .addField("Meninggal Hari Ini", corona.todayDeaths, true)
      .addField("Positif Aktif", corona.active, true);
      
      return message.channel.send(embed)
      
      
    }
    
    
  }
}
