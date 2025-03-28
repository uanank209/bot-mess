module.exports.config = {
    name: `keobuabao`,
    version: `1.0.0`,
    hasPermssion: 0,
    credits: `D-Jukie`,
    description: `Kéo búa bao (Oẳn tù tì)`,
    commandCategory: `Game`,
    usages: `[kéo/búa/bao]`,
    cooldowns: 0
};
module.exports.run = async function({ api, event, args, Users, Currencies }) {
    const { threadID, messageID, senderID } = event;
    const money = (await Currencies.getData(senderID)).money;
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];

    const listIMG = ['https://i.imgur.com/1uBAGlO.jpg', 'https://i.imgur.com/EOZx1tL.jpg', 'https://i.imgur.com/2WSbVaK.jpg'];
    const listItem = ['kéo', 'búa', 'bao'];

    var bot = listItem[Math.floor(Math.random() * listItem.length)];

    var user = args[0];
    var coins = args[1];
    if(!user) return api.sendMessage('[𝐌𝐎𝐍𝐄𝐘 💸] ĐCM thiếu dữ liệu kìa, mày phải chọn kéo búa hoặc bao + số tiền thì anh mày mới biết🙂', threadID, messageID);
    if(listItem.includes(user.toLowerCase()) == false) return api.sendMessage('[𝐌𝐎𝐍𝐄𝐘 💸] Lựa chọn không hợp lệ, mịe mày ngáo bò nữa🙃', threadID, messageID);

    var fu = listItem.findIndex(i => i == user);
    var fb = listItem.findIndex(i => i == bot);
    var a = [fu, fb];
    
    if (args[1] < 50 || isNaN(args[1])) return api.sendMessage(`[𝐌𝐎𝐍𝐄𝐘 💸] Mức đặt cược của mày phải trên 50$ mới được chơi`, threadID, messageID);
    if (money < coins) return api.sendMessage(`[𝐌𝐎𝐍𝐄𝐘 💸] Lêu lêu không đủ ${coins}$ để chơiii`, threadID, messageID);

    var compare = function (choice1, choice2){
        var out = [`✌️`, `👊`, `✋`];
        var checkwin = []
        var msgWin = `\n 🎎 𝐍𝐠𝐮̛𝐨̛̀𝐢: ${out[fu]} 𝐕𝐒 🤖 𝐁𝐨𝐭: ${out[fb]}\n[𝐌𝐎𝐍𝐄𝐘 💸] Cộng: ${coins}$ \n𝐍𝐡𝐮̛𝐨̛̀𝐧𝐠 𝐭𝐡𝐨̂𝐢 𝐧𝐠𝐡𝐢̃ 𝐬𝐚𝐨 𝐭𝐚𝐨 𝐭𝐡𝐮𝐚😗`
        var msgLose = `\n 🎎 𝐍𝐠𝐮̛𝐨̛̀𝐢: ${out[fu]} 𝐕𝐒 🤖 𝐁𝐨𝐭: ${out[fb]}\n[𝐌𝐎𝐍𝐄𝐘 💸] Trừ: ${coins}$ \n𝑻𝒖𝒐̂̉𝒊 𝒍𝒐̀𝒏𝒏😏`
        if(choice1 == choice2) {
            checkwin.push(`[𝐊𝐞̂́𝐭 𝐐𝐮𝐚̉ 🐥] - Hòa\n[𝐕𝐒] 🎎 𝐍𝐠𝐮̛𝐨̛̀𝐢: ${out[fu]}\n[𝐕𝐒] 🤖 𝐁𝐨𝐭: ${out[fb]} \n𝗖𝘂̃𝗻𝗴 𝗴𝗵𝗲̂ đ𝗮̂́𝘆 𝗰𝘂̛𝗻𝗴𝗴`)
            checkwin.push(3)
            return checkwin
        }
        if(choice1 == 'búa') {
            if(choice2 == 'kéo') {
                checkwin.push(`[𝐊𝐞̂́𝐭 𝐐𝐮𝐚̉ 🐥] - Thắng ${msgWin}`)
                checkwin.push(0)
                return checkwin
            }
            if(choice2 == 'bao') {
                checkwin.push(`[𝐊𝐞̂́𝐭 𝐐𝐮𝐚̉ 🐥] - Thua ${msgLose}`)
                checkwin.push(1)
                return checkwin
            }
        }
        if(choice1 == 'bao') {
            if(choice2 == 'búa') {
                checkwin.push(`[𝐊𝐞̂́𝐭 𝐐𝐮𝐚̉ 🐥] - Thắng ${msgWin}`)
                checkwin.push(0)
                return checkwin
            }
            if(choice2 == 'kéo') {
                checkwin.push(`[𝐊𝐞̂́𝐭 𝐐𝐮𝐚̉ 🐥] - Thua ${msgLose}`)
                checkwin.push(1)
                return checkwin
            }
        }
        if(choice1 == 'kéo') {
            if(choice2 == 'bao') {
                checkwin.push(`[𝐊𝐞̂́𝐭 𝐐𝐮𝐚̉ 🐥] - Thắng ${msgWin}`)
                checkwin.push(0)
                return checkwin
            }
            if(choice2 == 'búa') {
                checkwin.push(`[𝐊𝐞̂́𝐭 𝐐𝐮𝐚̉ 🐥] - Thua ${msgLose}`)
                checkwin.push(1)
                return checkwin
            }
        }
    };
    async function image(list) {
        var images = [];
        let download = (await axios.get(`${list[fb]}`, { responseType: "arraybuffer" } )).data; 
        let download_2 = (await axios.get(`${list[fu]}`, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync( __dirname + `/cache/avt${fb}.png`, Buffer.from(download, "utf-8"));
        fs.writeFileSync( __dirname + `/cache/avt${fu}.png`, Buffer.from(download_2, "utf-8"));
        images.push(fs.createReadStream(__dirname + `/cache/avt${fu}.png`));
        images.push(fs.createReadStream(__dirname + `/cache/avt${fb}.png`));
        return images
    }
    async function moneyU(type) {
        if(type == 3) return
        if(type == 0)  return Currencies.setData(senderID, options = {money: money + parseInt(coins)});
        if(type == 1) return Currencies.setData(senderID, options = {money: money - parseInt(coins)});
    }
    await moneyU(compare(user, bot)[1])
    var msg = {body: compare(user, bot)[0], attachment: await image(listIMG)}
    return api.sendMessage(msg, threadID, messageID);
}

