 /**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "luatbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "video One Piece",
  commandCategory: "Video",
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
"https://i.imgur.com/YSBhlwS.mp4",
"https://i.imgur.com/vAdzS7R.mp4",
"https://i.imgur.com/BEYRhxd.mp4",
"https://i.imgur.com/OyUzR5u.mp4",
"https://i.imgur.com/UZjC3dR.mp4",
"https://i.imgur.com/roqSLfF.mp4",
"https://i.imgur.com/x2J21tJ.mp4",
"https://i.imgur.com/In7G9IS.mp4",
"https://i.imgur.com/w1Vs660.mp4",
"https://i.imgur.com/V6CYDUE.mp4",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 100) api.sendMessage("Bạn cần 100 đô để xem video:V",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 100})
   var callback = () => api.sendMessage({body:`✍️ Bot của 𝑽𝒊𝒆̣̂𝒕 Đ𝒂̣𝒊 (𝑲𝒆𝒏) các bạn nhớ lưu ý khi dùng bot nhóooo🥰 \n👉 Điều kiện để sử dụng Bot \n🥰 Tôn trọng ADMINBOT \n✍️ Không chửi [ BOT ] \n😢 Spam nhiều mà ăn ban giáng chịu nha mấy cưnggg \n✍️ Chửi bot ăn ban cũng tự chịu nha mấy cưnggg \n💝 Không spam [ BOT ] nha mấy fen Prefix [/] \n🥰❤️Admin: 𝑽𝒊𝒆̣̂𝒕 Đ𝒂̣𝒊 (𝑲𝒆𝒏) \nZalo: 0962833514 \nDưới là luật của bot \n1: Thời gian bot onl: 24/24 \n2: Lưu ý Tắt phê duyệt khi thêm bot \n3: Cấm chửi bot cũng như spam nhiều thì sẽ được ăn bannnnn \n4: Hạn chế dùng lệnh gái nhất là ${name} \n5: Qtv cấm kick bot không có lý do😢 \n6: Qtv có thể bật 1 adminonly để cấm thành viên spam hoặc làm loạn bot🥰 lần 2 là để mở adminonly \n8: Mọi người có thể dùng lệnh callad để liên hệ với admin \n9: Bot không phế mà là admin phế =)) \n━━━━━━━━━━━━━━━━ \nCảm ơn đã đọc chúc mọi người dùng bot vui vẻ🥰`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4"));
let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })            
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   }
};