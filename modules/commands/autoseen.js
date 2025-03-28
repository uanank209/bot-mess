const fs = require('fs-extra');
const pathFile = __dirname + '/cache/autoseen.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  
module.exports.config = {
	name: "autoseen",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Ke",
	description: "Bật/tắt tự động seen khi có tin nhắn mới",
	commandCategory: "ADMIN",
	usages: "on/off",
	cooldowns: 5
};

module.exports.handleEvent = async ({ api, event, args }) => {
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable == 'true')
    api.markAsReadAll(() => {});
};

module.exports. run = async ({ api, event, args }) => {
  try {
	if (args[0] == 'on') {
	  fs.writeFileSync(pathFile, 'true');
	  api.sendMessage('Đ𝐚̃ 𝐛𝐚̣̂𝐭 𝐜𝐡𝐞̂́ đ𝐨̣̂ 𝐭𝐮̛̣ đ𝐨̣̂𝐧𝐠 𝐬𝐞𝐞𝐧 𝐤𝐡𝐢 𝐜𝐨́ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐦𝐨̛́𝐢', event.threadID, event.messageID);
	}
	else if (args[0] == 'off') {
	  fs.writeFileSync(pathFile, 'false');
	  api.sendMessage('Đ𝐚̃ 𝐭𝐚̆́𝐭 𝐜𝐡𝐞̂́ đ𝐨̣̂ 𝐭𝐮̛̣ đ𝐨̣̂𝐧𝐠 𝐬𝐞𝐞𝐧 𝐤𝐡𝐢 𝐜𝐨́ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐦𝐨̛́𝐢', event.threadID, event.messageID);
	}
	else {
	  api.sendMessage('𝐒𝐚𝐢 𝐫𝐮̀𝐢 𝐧𝐡𝐚𝐚𝐚, 𝐩𝐡𝐚̉𝐢 𝐝𝐮̀𝐧𝐠 𝐥𝐚̀: (Prefix)autoseen "on/off" chọn 1 trong 2😅', event.threadID, event.messageID);
	}
  }
  catch(e) {
    console.log(e);
  }
};