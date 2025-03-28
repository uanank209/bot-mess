 /**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "ping",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "tag toàn bộ thành viên",
  commandCategory: "Nhóm",
  usages: "girlnude",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/1HUlNdQ.jpg",
"https://i.imgur.com/PL2BreO.jpg",
"https://i.imgur.com/sXvBVBD.jpg",
"https://i.imgur.com/sXvBVBD.jpg",
"https://i.imgur.com/Ipunlp7.jpg", 
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("Bạn cần 0 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money + 0})
   var callback = () => api.sendMessage({body:`📢===𝗧̵𝗛̵𝗢̵̂𝗡̵𝗚̵ ̵𝗕̵𝗔̵́𝗢̵===📢\n🌸 ━━━━━━━━━━━━━ 🌸\n😘𝗗𝗮̣̂𝘆 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝗻𝗮̀𝗼 𝗠𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗼̛𝗶𝗶𝗶𝗶𝗶𝗶 \n🌸 ━━━━━━━━━━━━━ 🌸\n🧸𝗔𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 𝗹𝗮̀ 𝐕𝐢𝐞̣̂𝐭 Đ𝐚̣𝐢 (𝐊𝐞𝐧) đ𝗲̣𝗽 𝘇𝗮𝗶 𝘀𝗼̂́ 𝟭 𝘁𝗵𝗲̂́ 𝗴𝗶𝗼̛́𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗮𝗶 𝘃𝗮̀𝗼 đ𝗮̂𝘂 đ𝘂̛𝗼̛̣𝗰 =)) \n\n🌏𝗔𝗶 𝗺𝘂𝗼̂́𝗻 𝗰𝗼́ 𝗰𝗵𝗼̂̀𝗻𝗴 𝘁𝗵𝗶̀ 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗔𝗱𝗺𝗶𝗻 𝗰𝘂̉𝗮 𝘁𝗼̂𝗶 https://www.facebook.com/profile.php?id=100089318180507❤️`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};