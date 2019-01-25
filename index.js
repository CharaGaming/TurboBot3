const Discord = require('discord.js');
const client = new Discord.Client();
client.login("NDc5OTcwMDMwNDk1MzM0NDAx.DyNV6g.FXxZG2lloPZEPak4ZSPxWXisKbw")
client.on('message', (message) => {
  if (message.content == "T!moder") {
      message.reply("**► #white_check_mark#  T!mute,T!ban,T!kick,T!say - Модераторские команды**");
  }
  if (message.content == "T!afk") {
          ("**Не надолга отошел.**");
  }
  if (message.content == "T!OFFafk") {
          message.reply("**Вернулся*");
  }
  if (message.content == "T!off") {
      message.channel.send("T!off");
  }
  if (message.content == "T!hello") {
      message.channel.send("**► Привет**");
  }
  if (message.content == "T!bot") {
      message.channel.send("**► Я раскажу много о себе но я БОТ!)**");
  }
  if (message.content == "T!sh") {
      message.channel.send("**► Шаблон**");
  }
  if (message.content == "T!hack") {
      message.channel.send("**► BANNED TI**");
  }
  if (message.content == "T!git") {
      var Title = "Подготовка";
  }
if(message.content=="T!avatar"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setImage(user.user.avatarURL)
          .setDescription("**Аватар #arrow_right# **" + user)
          .setColor("008B8B")
          .setFooter('https://discord.gg/AksgRZ7','https://media.discordapp.net/attachments/528156177339777056/534368836267540485/ac4bb8daabc2e64ba3cb44fbb7a40a7c486f1f8er2-189-189_00.gif')
          .setTimestamp();
      message.channel.send({embed: av});
}
if(message.content=="T!help"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("Комманы:")
          .setDescription("**1) ``T!moder`` - cписок админских/модераторских комманды (бан,кик) \n2) ``T!invite`` - сылка на данного бота. \n3) ``T!support`` - сервер тех подержки \n4) ``T!afk`` - зайти в АФК режим \n5) ``T!OFFafk`` - отключение АФК режима**")
          .setColor("40E0D0")
          .setFooter('https://discord.gg/AksgRZ7','https://media.discordapp.net/attachments/528156177339777056/534368836267540485/ac4bb8daabc2e64ba3cb44fbb7a40a7c486f1f8er2-189-189_00.gif')
      message.author.send({embed: av});
}
if(message.content=="T!info"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setAuthor('CubeBot', 'https://cdn.discordapp.com/attachments/520565234822414336/520565324265947137/uUeMcMfYBEvBuPBkYu-X4A-default.jpg')
          .setDescription("**Привет! Я TurboBot я бот дискорда! Это моя информация** \n \n **Мой префикс - ``#``, если что обращайся**")
          .addField("Мои Разроботчики:", "**<:Screenshot_9:525672851802685450> Мишутка ♔#0001\n <:565851:525672868324048907> 󠂪 󠂪󠂪C็็็็็󠂪󠂪H็็็็󠂪A็็็󠂪R็็A็#22373**")
          .addField("Полезные сылки:", "**[:link: Официальный сервер Бота](https://discord.gg/6dAuQJw) \n [:link: Сервера Разработчика](https://discord.gg/fJYzM55) \n [:link: Официальный сервер JS](https://discord.gg/bRCvFy9)**")
          .addField("Версия робота:", "**2.0**")
          .addField("Партнёры:","CubeBot==https://discord.gg/JyfjH2M")
          .setThumbnail('https://discord.gg/AksgRZ7','https://media.discordapp.net/attachments/528156177339777056/534368836267540485/ac4bb8daabc2e64ba3cb44fbb7a40a7c486f1f8er2-189-189_00.gif')
          .setColor("40E0D0")
          .setFooter('https://discord.gg/AksgRZ7','https://media.discordapp.net/attachments/528156177339777056/534368836267540485/ac4bb8daabc2e64ba3cb44fbb7a40a7c486f1f8er2-189-189_00.gif')
      message.channel.send({embed: av});
}
if(message.content=="T!invite"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("**Bot invite**")
          .setDescription("[:link: **Приглашение на бота**](https://discordapp.com/oauth2/authorize?client_id=479970030495334401&scope=bot&permissions=2146958591)")
          .setColor("FF8C00")
          .setFooter('https://discord.gg/AksgRZ7','https://media.discordapp.net/attachments/528156177339777056/534368836267540485/ac4bb8daabc2e64ba3cb44fbb7a40a7c486f1f8er2-189-189_00.gif')
      message.author.send({embed: av});
}
if(message.content=="T!support"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("**Сервер тех поддержка**")
          .setDescription("**[• Ответим на все ваши вопросы и жалобы!.](https://discord.gg/AksgRZ7)**")
          .setColor("FF8C00")
         .setFooter('https://discord.gg/AksgRZ7','https://media.discordapp.net/attachments/528156177339777056/534368836267540485/ac4bb8daabc2e64ba3cb44fbb7a40a7c486f1f8er2-189-189_00.gif')
      message.author.send({embed: av});
}
if(message.content=="T!Ogyrets"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("**Testers Board \n custoesr**")
          .setDescription("foll.js,8559q56sqwgs569675jkhdja9jf789767,86ad#special....\n Compuctator cгарел..<:EROL:505719963454144513>.")
          .setColor("FF8C00")
          .setFooter('https://discord.gg/AksgRZ7','https://media.discordapp.net/attachments/528156177339777056/534368836267540485/ac4bb8daabc2e64ba3cb44fbb7a40a7c486f1f8er2-189-189_00.gif')
      message.channel.send({embed: av});
}
if(message.content=="T!kruto"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("10/10")
          .setDescription("\n")
          .setColor("FF8C00")
          .setFooter('https://discord.gg/AksgRZ7','https://media.discordapp.net/attachments/528156177339777056/534368836267540485/ac4bb8daabc2e64ba3cb44fbb7a40a7c486f1f8er2-189-189_00.gif')
      message.channel.send({embed: av});
}
if(message.content=="!T OOF"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("OOOOOOOOOOOOFFFFFF")
          .setDescription("")
          .setColor("FF8C00")
          .setFooter('https://discord.gg/AksgRZ7','https://media.discordapp.net/attachments/528156177339777056/534368836267540485/ac4bb8daabc2e64ba3cb44fbb7a40a7c486f1f8er2-189-189_00.gif')
      message.channel.send({embed: av});
}
if(message.content=="T!prefix"){
let user = message.mentions.members.first();
      if (!user) user = message.member;
      let av = new Discord.RichEmbed()
          .setTitle("Мой префикс")
          .setDescription("**T!(Command)**")
          .setColor("FF8C00")
          .setFooter('https://discord.gg/AksgRZ7','https://media.discordapp.net/attachments/528156177339777056/534368836267540485/ac4bb8daabc2e64ba3cb44fbb7a40a7c486f1f8er2-189-189_00.gif')
      message.channel.send({embed: av});
}
 var msg = message.content;
if(msg.substr(0, 4) == "T!say")
{
var forwrite = msg.substr(5);
message.delete(1);
message.channel.send(forwrite);
}
if (!message.guild) return;

client.user.setActivity(`TurboBot!Prefix T!`,{ type: 'PLAYING' }
)

                             // If the message content starts with "!kick"
                                                                                                     if (message.content.startsWith('T!kick')) {
                                                                                                                           // Assuming we mention someone in the message, this will return the user
                                                                                                                           // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
                                                                                                                           const user = message.mentions.users.first();
                                                                                                                           // If we have a user mentioned
                                                                                                                           if (user) {
                                                                                                                             // Now we get the member from the user
                                                                                                                             const member = message.guild.member(user);
                                                                                                                             // If the member is in the guild
                                                                                                                             if (member) {
                                                                                                                               /**
                                                                                                                                * Kick the member
                                                                                                                                * Make sure you run this on a member, not a user!
                                                                                                                                * There are big differences between a user and a member
                                                                                                                                */
                                                                                                                               member.kick('Кик!').then(() => {
                                                                                                                                 // We let the message author know we were able to kick the person
                                                                                                                                 message.reply(`**${user.tag} Кикнут!**`);
                                                                                                                               }).catch(err => {
                                                                                                                                 // An error happened
                                                                                                                                 // This is generally due to the bot not being able to kick the member,
                                                                                                                                 // either due to missing permissions or role hierarchy
                                                                                                                                 message.reply('**Он старше тебя балда**');
                                                                                                                                 // Log the error
                                                                                                                                 console.error(err);
                                                                                                                               });
                                                                                                                             } else {
                                                                                                                               // The mentioned user isn't in this guild
                                                                                                                               message.reply('**Его нету**');
                                                                                                                             }
                                                                                                                           // Otherwise, if no user was mentioned
                                                                                                                           } else {
                                                                                                                             message.reply('**А я не понел шо вы делаете в моём холодильнеке?Вы хотите кушац?**');
                                                                                                                           }
                                                                                                                         }
                                                                                                                         if (!message.guild) return;

                                                                                                                         // if the message content starts with "!ban"
                                                                                                                         if (message.content.startsWith('T!ban')) {
                                                                                                                           // Assuming we mention someone in the message, this will return the user
                                                                                                                           // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
                                                                                                                           const user = message.mentions.users.first();
                                                                                                                           // If we have a user mentioned
                                                                                                                           if (user) {
                                                                                                                             // Now we get the member from the user
                                                                                                                             const member = message.guild.member(user);
                                                                                                                             // If the member is in the guild
                                                                                                                             if (member) {
                                                                                                                               /**
                                                                                                                                * Ban the member
                                                                                                                                * Make sure you run this on a member, not a user!
                                                                                                                                * There are big differences between a user and a member
                                                                                                                                * Read more about what ban options there are over at
                                                                                                                                * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
                                                                                                                                */
                                                                                                                               member.ban({
                                                                                                                                 reason: 'Бан!',
                                                                                                                               }).then(() => {
                                                                                                                                 // We let the message author know we were able to ban the person
                                                                                                                                 message.reply(`**${user.tag} Забанен!**`);
                                                                                                                               }).catch(err => {
                                                                                                                                 // An error happened
                                                                                                                                 // This is generally due to the bot not being able to ban the member,
                                                                                                                                 // either due to missing permissions or role hierarchy
                                                                                                                                 message.reply('**Он старше тебя балда**');
                                                                                                                                 // Log the error
                                                                                                                                 console.error(err);
                                                                                                                               });
                                                                                                                             } else {
                                                                                                                               // The mentioned user isn't in this guild
                                                                                                                               message.reply('**Его нету**');
                                                                                                                             }
                                                                                                                           } else {
                                                                                                                           // Otherwise, if no user was mentioned
                                                                                                                             message.reply('**DARK IN YOUR SOUL**');
                                                                                                                           }
                                                                                                                         }





});