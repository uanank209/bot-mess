const axios = require('axios');
const fs = require('fs');

let path = __dirname+'/cache/data/bot.json';
let data = {};
let save = _ => fs.writeFileSync(path, JSON.stringify(data));

if (!fs.existsSync(path)) save(); 
data = JSON.parse(fs.readFileSync(path));

module.exports = {
  config: {
    name: "sim",
    version: "1.0.0",
    hasPermission: 0,
    credits: "L.V. Bằng",
    description: "Auto trả lời người dùng",
    commandCategory: "Thành Viên",
    usages: "",
    cooldowns: 1,
  },

  run: ({event, api}) => {
    let t = event.threadID;
    data[t] = data[t] == undefined ? false : data[t] == false ? true : false;

    save();
    api.sendMessage(`✅ ` + (data[t] ? 'Bật' : 'Tắt') + ` sim thành công`, t);
  },

  sim: async function(text) {
    const url = 'https://api.simsimi.vn/v1/simtalk';
    const data = `text=${text}&lc=vn`;
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    try {
      const response = await axios.post(url, data, { headers });
      return response.data.message || 'không biết';
    } catch (err) {
      return err.response?.data?.message || null;
    }
  },

  handleEvent: async function({ event, api }) {
    if (event.senderID == api.getCurrentUserID()) return;
    if (data[event.threadID] === false) return;
    if (event.body && event.body.toLowerCase().includes('bot') && !event.messageReply) {
      const answer = await this.sim(event.body);
      api.sendMessage({
        body: answer && answer.includes("Tôi không biết làm thế nào để trả lời. Dạy tôi câu trả lời") ? "Tôi không hiểu bạn đang nói gì, có lẽ tôi chưa được cập nhật kiến thức :( " : answer ? answer : '',
      }, event.threadID, (err, info) => {
        if (err) return;
        global.client.handleReply.push({
          name: this.config.name,
          messageID: info.messageID,
          author: event.senderID
        });
      }, event.messageID);
    }
  },

  handleReply: async function({ event, api }) {
    if (event.senderID == api.getCurrentUserID()) return;
    const answer = await this.sim(event.body);
    api.sendMessage({
      body: answer && answer.includes("Tôi không biết làm thế nào để trả lời. Dạy tôi câu trả lời") ? "Tôi không hiểu bạn đang nói gì, có lẽ tôi chưa được cập nhật kiến thức :( " : answer ? answer : '',
    }, event.threadID, (err, info) => {
      if (err) return;
      global.client.handleReply.push({
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID
      });
    }, event.messageID);
  }
};
