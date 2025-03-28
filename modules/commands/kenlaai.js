module.exports.config = {
    name: "kenlaai",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Mod Syn Credit(lụm) vui lòng giữ credit không giữ làm con chó bú lồn",
    description: "Gạ địt 1 ai đó <3",
    commandCategory: "Gọi Hồn",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    var arraytag = [];
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Ken là người đẹp zai nhất thế giới");
setTimeout(() => {a({body: "Ken đẹp zai hết phần thiên hạ" + " ", mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Ken đẹp chết người, sướng đáng có 10 người yêu:3" + " ", mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Fen nào muốn làm người yêu Ken hong:)?" + " ", mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Làm người yêu của Ken là sướng lắm á:>", mentions: arraytag})}, 9000);

  

  
  }