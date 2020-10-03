const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.login("NzU5Nzc5OTUxMTc1NTMyNTQ1.X3CeOA.HmxbwKOv4eCrRfVux4WJI0qAau4")


client.on('message', function (message) {
    const embed = new Discord.MessageEmbed()
    .setTitle(":trophy: Ranks Invitation :")
    .setDescription("**`2` invites: <@&759458268128346112> \n `6` invites: <@&759458267071250534> \n `10` invites: <@&759458266576191598> \n `15` invites: <@&759458265753976842> \n `30` invites: <@&759458264940544080>**")
    .addField("Comment faire pour avoir les rôles ?", "Il faut tous simplement inviter vos potes, votre famille, **TOUT LE MONDE** et aller dans le salon <#759458298260619264> pour les voirs ou faites **.invites** dans <#759458315603410944> !")
    if (message.content === "h") {
        message.channel.send(embed)
        
  
        }
      })
        client.on('message', function (message) {
          const embed = new Discord.MessageEmbed()
          .setTitle("Choisisez vos rôles :")
          .setDescription("🚺 : <@&759458269713924116> \n 🚹 : <@&759458270669832283>")
          .setImage("https://cdn.discordapp.com/attachments/759837751377264651/760562842415005706/a062c45b4d790a5c4902f95d7dac26ff207a8691_hq.gif")
          .setFooter("Merci d'avoir choisi vos rôles !")
          if (message.content === "rg") {
              message.channel.send(embed)
          }      
})

client.on('message', function (message) {
  const embed = new Discord.MessageEmbed()
  .setTitle("Choisisez vos rôles :")
  .setDescription("👴 : <@&759458274973188127> \n 👶 : <@&759458275854516275>")
  .setImage("https://cdn.discordapp.com/attachments/759837751377264651/760562842415005706/a062c45b4d790a5c4902f95d7dac26ff207a8691_hq.gif")
  .setFooter("Merci d'avoir choisi vos rôles !")
  if (message.content === "ra") {
      message.channel.send(embed)
  }      
})

client.on('message', function (message) {
  const embed = new Discord.MessageEmbed()
  .setTitle("Vous voulez devenir staff de hunters ? \n Allors faîte votres candidature !")
  .setDescription("**__Nom et Prénon__: \n __Àge__: \n __Heure actif__: \n __Poste__: \n __Motivation__: \n __Pourquoi vous et pas d'autre ?__: \n __Experience__:**")
  .setFooter("Merci de respecter l'exemple !")
  if (message.content === "c") {
    message.delete()
      message.channel.send(embed)
  }      
})

client.on('message', function (message) {
  const embed = new Discord.MessageEmbed()
  if (message.content === "cm") {
    message.delete()
    client.guilds.cache.get('754302309709906022').channels.cache.get('761639803904720936').send("Merci d'avoir fait votre candidature !\n\n Exemple de candidature : https://discordapp.com/channels/754302309709906022/761639803904720936/761642334370529302")
  }      
})
