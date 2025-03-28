 const axios = require("axios");
const fs = require("fs");
module.exports.config = {
    name: "cap",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Chụp ảnh profile của người dùng",
    commandCategory: "THÀNH VIÊN",
    usages: "",
    cooldowns: 5
}
module.exports.handleEvent = async ({ api, event, Threads, args, Users }) => {
  try{
  if(event.body.toLowerCase() == "cap"){
    const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`Đợi bố mày 3 giây để bố mày cap cho chó ${name} quáaaaaaa!!`, event.threadID, event.messageID);
    if (event.type == "message_reply") {
      var uid = event.messageReply.senderID;
    } else if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `sb=q6aBY8fB4wR_xCcmH_TcoGqm;m_pixel_ratio=3;locale=vi_VN;x-referer=eyJyIjoiL2hvbWUucGhwP3RidWE9MSIsImgiOiIvaG9tZS5waHA%2FdGJ1YT0xIiwicyI6Im0ifQ%3D%3D;wd=1366x651;c_user=100004899736750;datr=TI-VYwuPpy-RKlwVzv8UNc5c;presence=C%7B%22lm3%22%3A%22g.4617984981602794%22%2C%22t3%22%3A%5B%7B%22i%22%3A%22u.100082492307716%22%7D%2C%7B%22i%22%3A%22g.5534527426608512%22%7D%2C%7B%22i%22%3A%22g.8221187817956436%22%7D%2C%7B%22i%22%3A%22g.5509078275874903%22%7D%2C%7B%22i%22%3A%22g.8731287723547933%22%7D%2C%7B%22i%22%3A%22g.5673691489385856%22%7D%2C%7B%22i%22%3A%22g.5831763723529199%22%7D%2C%7B%22i%22%3A%22u.100026059477387%22%7D%5D%2C%22utc3%22%3A1670764950721%2C%22v%22%3A1%7D;xs=24%3A50ppWx5GbzTrBw%3A2%3A1670745930%3A-1%3A6372%3A%3AAcU1hXvim-HNwsMysWHXW8hjRcq3msBsxDh9UR7ARA;fr=0AsKBcU48LbPcbHBl.AWUNjReNcg84ityr9XDl5TJzw3o.Bjld7d.xD.AAA.0.0.Bjld7d.AWVefisnIFg;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = ``;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=8f68a7&url=${url}&dimension=1024x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `‎🎥 ==== [ 𝗖𝗔𝗣 𝗪𝗔𝗟𝗟 ] ==== 🎥
━━━━━━━━━━━━━━━━
🌸 𝗮̂𝘆 𝗱𝗼̂ 𝗯𝗼𝘁 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝗿𝗼̂̀𝗶 𝗻𝗲̀ ${name}
━━━━━━━━━━━━━━━━━━
⚙️ 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 !𝗰𝗮𝗽 + 𝘁𝗮𝗴 𝗵𝗼𝗮̣̆𝗰 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 đ𝗲̂̉ 𝗯𝗼𝘁 𝗰𝗮𝗽
💓 𝗗𝘂̀𝗻𝗴 !𝗰𝗮𝗽 𝗱𝘁𝗵 đ𝗲̂̉ 𝗯𝗼𝘁 𝗰𝗮𝗽 𝘁𝗵𝗲𝗼 𝗱𝗮̣𝗻𝗴 𝗮̉𝗻𝗵 đ𝗶𝗲̣̂𝗻 𝘁𝗵𝗼𝗮̣𝗶
━━━━━━━━━━━━━━━━━━
→ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗮𝗽`,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
  }
} catch(e){
    console.log(e)
}}
module.exports.run = async function ({ api,Users,event, args }) {
  const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`Đợi tý đi ${name}!!`, event.threadID, event.messageID);
    var uid = String(args[0]);
    isNaN(uid) && (uid = Object.keys(event.mentions)[0], "message_reply" == event.type ? uid = event.messageReply.senderID : uid = event.senderID);
    var cookies = `sb=q6aBY8fB4wR_xCcmH_TcoGqm;m_pixel_ratio=3;locale=vi_VN;x-referer=eyJyIjoiL2hvbWUucGhwP3RidWE9MSIsImgiOiIvaG9tZS5waHA%2FdGJ1YT0xIiwicyI6Im0ifQ%3D%3D;wd=1366x651;c_user=100004899736750;datr=TI-VYwuPpy-RKlwVzv8UNc5c;presence=C%7B%22lm3%22%3A%22g.4617984981602794%22%2C%22t3%22%3A%5B%7B%22i%22%3A%22u.100082492307716%22%7D%2C%7B%22i%22%3A%22g.5534527426608512%22%7D%2C%7B%22i%22%3A%22g.8221187817956436%22%7D%2C%7B%22i%22%3A%22g.5509078275874903%22%7D%2C%7B%22i%22%3A%22g.8731287723547933%22%7D%2C%7B%22i%22%3A%22g.5673691489385856%22%7D%2C%7B%22i%22%3A%22g.5831763723529199%22%7D%2C%7B%22i%22%3A%22u.100026059477387%22%7D%5D%2C%22utc3%22%3A1670764950721%2C%22v%22%3A1%7D;xs=24%3A50ppWx5GbzTrBw%3A2%3A1670745930%3A-1%3A6372%3A%3AAcU1hXvim-HNwsMysWHXW8hjRcq3msBsxDh9UR7ARA;fr=0AsKBcU48LbPcbHBl.AWUNjReNcg84ityr9XDl5TJzw3o.Bjld7d.xD.AAA.0.0.Bjld7d.AWVefisnIFg;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = ``;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=466dcb&url=${url}&dimension=1024x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `Ây dô xong rồi nè ${name}`,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
  }