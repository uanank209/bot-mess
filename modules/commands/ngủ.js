module.exports.config = {
  name: "ngủ",
  version: "1.2.0",
  hasPermssion: 0,
  credits: "Lmao tủn tủn",
  description: "nhắc bot cái ầu uồi:)))",
  commandCategory: "Bổ não",
  usages: "[trống]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ api, event, Users }) => {
  const cc = [
    "Chúc bạn ngủ ngon ❤️", 
    "Ngủ đi baiiiiiiiii <3", 
    "Ok để tui canh bạn ngủ =))", 
    "Cho mình ngủ chung với, rồi 2 chúng ta cùng tạo em bé :>", 
    "Cút đi",
    "Đừng ngủ, tui chới 1 mình buồn lắm á 🥺",
    "Bố mày cũng đi ngủ"
  ];
  let name = await Users.getNameUser(event.senderID)
  if (event.body.toLowerCase() == "ngủ"){ 
    return api.sendMessage(
      name + ` ${cc[Math.floor(Math.random() * cc.length)]}`
      , event.threadID, event.messageID)
  }
  
}

module.exports.run = async ({ api, event, Users }) => {
  let name = await Users.getNameUser(event.senderID)
  return api.sendMessage(name + ' biết xài không hả', event.threadID, event.messageID)
}
