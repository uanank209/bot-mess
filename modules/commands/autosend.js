module.exports.config = {
    name: 'autosend',
    version: '10.02',
    hasPermssion: 2,
    credits: 'Ken', // được fix bởi sơn pro
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Hệ thống',
    usages: '[]',
    cooldowns: 3
};
const r = a => a[Math.floor(Math.random()*a.length)],
{
    get
} = require('axios'),
config = [{
        timer: '12:45:00 AM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
          {
        timer: '12:00:00 AM',
    message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
{
        timer: '11:35:00 AM',
    message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
{
        timer: '10:35:00 AM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫:  Việt Đại (Ken)']
},
{
        timer: '9:35:00 AM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
{
        timer: '8:35:00 AM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
{
        timer: '7:35:00 AM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
{
        timer: '6:35:00 AM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
          {
    timer: '6:00:00 AM',
    message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
{
        timer: '5:10:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
{ 
        timer: '12:35:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
{ 
        timer: '12:00:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
{
        timer: '11:35:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
{
        timer: '10:35:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
{
        timer: '9:35:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
{
        timer: '8:35:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n⇨ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)🍭⇦']
},
{
        timer: '8:00:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n⇨ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)🍭⇦']
},
{
        timer: '7:35:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n⇨ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)🍭⇦']
},
{
        timer: '6:35:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n⇨ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)🍭⇦']
},
{
        timer: '5:35:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n⇨ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)🍭⇦']
},
{
        timer: '5:00:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n⇨ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)🍭⇦']
},
{
        timer: '4:35:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
{
        timer: '3:35:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
{
        timer: '2:35:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
{ 
        timer: '2:00:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
},
{
        timer: '1:35:00 PM',
        message: ['🥱𝐀𝐮𝐭𝐨𝐒𝐞𝐧𝐝🥱\n∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\n ➝🎥𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \nĐ𝑎̂𝑦 𝑙𝑎̀ 𝑡𝑖𝑛 𝑛ℎ𝑎̆́𝑛 𝑡𝑢̛̣ đ𝑜̣̂𝑛𝑔 𝑛ℎ𝑒́ 𝑘ℎ 𝑐𝑜́ 𝑐ℎ𝑢́𝑐 𝑐𝑜𝑛 𝑐𝑎̣̆𝑐 𝑔𝑖̀ đ𝑎̂𝑢🎬 \n💬 𝐂𝐚 𝐝𝐚𝐨:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➣ 𝐀𝐮𝐭𝐡𝐨𝐫: Việt Đại (Ken)']
    }];
module.exports.onLoad = o => {
    if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
    global.autosendmessage_setinterval = setInterval(async function() {
        if (á = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {
            var msg = r(á.message);
            msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await get(`https://api.kenpatv.repl.co/ken/?apikey=0bk3s6IAyq`)).data.data)
            msg = {
                body: msg, attachment: (await get((await get(`https://image-random-api.dungkon.repl.co/ken`)).data.data, {
                    responseType: 'stream'
                })).data
            };
            global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
        };
    }, 1000);
};
module.exports.run = () => {};