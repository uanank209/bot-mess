module.exports.config = {
  name: "pokemon",
  version: "1.2.8",
	hasPermssion: 0,
	credits: "TuanDzz", //mod by Nguyen
	description: "Xem thông tin về nhân vật trong phim",
	commandCategory: "Hình ảnh",
	usages: "Nhân vật Pokemon",
  cooldowns: 5, 
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "request": ""
  }
}

module.exports.onLoad = () => {
  let { mkdirSync, existsSync, createWriteStream } = require('fs-extra');
  let request = require("request");
  let dirMaterial = __dirname + `/noprefix/pokemon/`; 
  if (!existsSync(dirMaterial + "noprefix" + "pokemon")) mkdirSync(dirMaterial, { recursive: true }) 
  
  if (!existsSync(dirMaterial + "1.jpg")) request("https://i.imgur.com/FqbaLlu.jpg").pipe(createWriteStream(dirMaterial + "1.jpg"))

if (!existsSync(dirMaterial + "2.jpg")) request("https://i.imgur.com/eiP6va8.jpg").pipe(createWriteStream(dirMaterial + "2.jpg"))

if (!existsSync(dirMaterial + "3.jpg")) request("https://i.imgur.com/gwR3czI.jpg").pipe(createWriteStream(dirMaterial + "3.jpg"))

if (!existsSync(dirMaterial + "4.jpg")) request("https://i.imgur.com/yzps7FQ.jpg").pipe(createWriteStream(dirMaterial + "4.jpg"))

if (!existsSync(dirMaterial + "5.jpg")) request("https://i.imgur.com/x4XYQ2B.jpg").pipe(createWriteStream(dirMaterial + "5.jpg"))

if (!existsSync(dirMaterial + "6.jpg")) request("https://i.imgur.com/f1JNQ4P.jpg").pipe(createWriteStream(dirMaterial + "6.jpg"))

if (!existsSync(dirMaterial + "7.jpg")) request("https://i.imgur.com/3FpYZxC.jpg").pipe(createWriteStream(dirMaterial + "7.jpg"))

if (!existsSync(dirMaterial + "8.jpg")) request("https://i.imgur.com/awZN6g2.jpg").pipe(createWriteStream(dirMaterial + "8.jpg"))

if (!existsSync(dirMaterial + "9.jpg")) request("https://i.imgur.com/nCZu0NF.jpg").pipe(createWriteStream(dirMaterial + "9.jpg"))

if (!existsSync(dirMaterial + "10.jpg")) request("https://i.imgur.com/qw1tq8p.jpg").pipe(createWriteStream(dirMaterial + "10.jpg"))

if (!existsSync(dirMaterial + "11.jpg")) request("https://i.imgur.com/IATUIyS.jpg").pipe(createWriteStream(dirMaterial + "11.jpg"))

if (!existsSync(dirMaterial + "12.jpg")) request("https://i.imgur.com/XCTrDTV.jpg").pipe(createWriteStream(dirMaterial + "12.jpg"))

if (!existsSync(dirMaterial + "13.jpg")) request("https://i.imgur.com/sw26vBP.jpg").pipe(createWriteStream(dirMaterial + "13.jpg"))

if (!existsSync(dirMaterial + "14.jpg")) request("https://i.imgur.com/O9I6e68.jpg").pipe(createWriteStream(dirMaterial + "14.jpg"))

}

module.exports.handleReply = async ({ api, event, handleReply }) => {
  let { createReadStream } = require("fs-extra");
  let { threadID, messageID, senderID, body } = event;
    switch(handleReply.type) {
        case "choosee": {
            switch(body) {
              case "1": {
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "1̵.̵ ̵S̵a̵t̵o̵s̵h̵i̵ \n━━━━━━━━━━━━━━━━ \n+Tên tiếng Anh: Ash Ketchum \n+Xuất hiện: Anime Pokemon \n+Quê hương: Thị trấn Masara, Kanto \n+Tuổi: 10 \n\n Là nhân vật chính của series Pokemon, Satoshi chắc chắn là cái tên quen thuộc với tất cả các fan hâm mộ bộ phim này. Với ước mơ trở thành bậc thầy huấn luyện Pokemon tài ba nhất, Satoshi đã đồng hành cùng các bạn đi phiêu lưu và chinh phục chức vô địch tại các liên đoàn.", 
				attachment: createReadStream(__dirname + `/noprefix/pokemon/1.jpg`)
			}, threadID, messageID)
              };
                break;
              case "2": {
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "2̵.̵̵̵ ̵̵̵K̵̵̵a̵̵̵s̵̵̵u̵̵̵m̵̵̵i̵̵̵ \n━━━━━━━━━━━━━━━━ \n+Tên tiếng Anh: Misty \n+Xuất hiện: Pokemon tập 1 \n+Quê hương: Thành phố Hanada, Vùng Kanto \n+Tuổi: 10 \n\n Kasumi – bạn đồng hành đầu tiên của Satoshi là một thủ lĩnh của nhà thi đấu. Cô sinh ra trong 1 gia đình có truyền thống huấn luyện pokemon hệ nước với ba anh chị em là Sakura, Ayame và Botan. \n Kasumi và Satoshi gặp nhau lần đầu tiên khi cô bé vô tình câu được Satoshi khi cậu đang cố thu phục 1 chú Pokémon hệ nước. Sự cố xảy ra khiến chiếc xe đạp mà Satoshi mượn của Kasumi bị hư hỏng nghiêm trọng. Cô bé quyết định đi theo Satoshi cho đến khi cậu trả lại chiếc xe đạp lại cho cô. Trên đường đi, cả hai nhanh chóng trở nên thân thiết và đồng hành cùng nhau trải qua nhiều thử thách. Kasumi sau khi lấy lại chiếc xe đạp vào cuối Giải liên đoàn Johto đã trở lại Nhà thi đấu Hanada và tiếp tục nhiệm vụ của mình với tư cách là thủ lĩnh nhà thi đấu.", 
				attachment: createReadStream(__dirname + `/noprefix/pokemon/2.jpg`)
			}, threadID, messageID)
            };
                break;
              case "3": {
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "3̵.̵ ̵T̵a̵k̵e̵s̵h̵i̵ \n━━━━━━━━━━━━━━━━ \n+Tên tiếng Anh: Brock \n+Xuất hiện: Pokemon mùa 2 – mùa 13 \n+Quê hương: Thành phố Nibi, Vùng Kanto \n+Tuổi: 15 \n\n Takeshi là thủ lĩnh nhà thi đấu Thành phố Nibi và chủ yếu sử dụng Pokémon hệ đá. Dù là thủ lĩnh nhà thi đấu nhưng ước mơ thực sự của Takeshi là trở thành người chăm sóc Pokémon. Về tính cách, Takeshi thường bị thu hút bởi những cô gái đẹp và cũng vì vậy mà anh hay bị những bạn nữ trong đội nhắc nhở vì tính mê gái của mình. \n Trong số các nhân vật trong phim pokemon, đây là người đồng hành lâu nhất với Satoshi. Takeshi xuất hiện từ mùa 2 đến mùa 13 của series Pokemon. Ở cuối mùa phim Diamond and Pearl: Sinnoh League Victors, Takeshi đã tạm biệt Satoshi để trở thành một bác sĩ Pokémon.", 
				attachment: createReadStream(__dirname + `/noprefix/pokemon/3.jpg`)
			}, threadID, messageID)
            };
                break;
              case "4": {
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "4̵.̵ ̵K̵e̵n̵j̵i̵  \n━━━━━━━━━━━━━━━━ \n+Tên tiếng Anh: Tracey Sketchit \n+Xuất hiện: Pokemon mùa 2, mùa 5, mùa 8, mùa 9 \n+Quê hương: chưa biếtv \n\n Kenji là một nhà quan sát Pokémon và là trợ lý của Giáo sư Yukinari Okido ở Thị trấn Masara. Kenji xuất hiện lần đầu tiên trong Pokemon tập 84 khi bắt gặp Satoshi chuẩn bị chiến đấu với ba huấn luyện viên khác. Sau khi giúp Satoshi và Kasumi cứu pokemon bị thương và biết 2 người cùng là người quen của Giáo sư Okido, thần tượng của mình, Kenji đã quyết định đi cùng Satoshi và Kasumi với mong ước được gặp giáo sư Okido.", 
				attachment: createReadStream(__dirname + `/noprefix/pokemon/4.jpg`)
			}, threadID, messageID)
            };
                break;
              case "5": {
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "5̵.̵ ̵H̵a̵r̵u̵k̵a̵ \n━━━━━━━━━━━━━━━━ \n+Tên tiếng Anh: May \n+Xuất hiện: Pokemon mùa 6 – mùa 9 \n+Quê hương: Thành phố Touka, Hoenn \n+Tuổi: 10 \n\n Xuất hiện lần đầu vào tập 277 của Pokemon mùa 6, cô bé Haruka còn được gọi là  “Công chúa Hoenn” đã gặp được Satoshi ở Hoenn và hành trình phiêu lưu cùng Satoshi. Dù ban đầu không thích Pokémon, cô bé đã bắt đầu tham gia các cuộc thi với Pokémon mà mình sở hữu. \n May đã cùng với Satoshi và Takeshi đi qua vùng Hoenn và Kanto trong khi Satoshi đang thi đấu ở Giải Liên Minh Hoenn và Battle Frontier. Đến khi Satoshi và Takeshi chọn đi du hành đến Sinnoh, May quyết định theo chân đối thủ của cô đến Johto.", 
				attachment: createReadStream(__dirname + `/noprefix/pokemon/5.jpg`)
			}, threadID, messageID)
              };
                break;
              case "6": {
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "6̵.̵ ̵M̵a̵s̵a̵t̵o̵ \n━━━━━━━━━━━━━━━━ \n+Tên tiếng Anh: Max \n+Xuất hiện: Pokemon mùa 6 – mùa 9 \n+Quê hương: Thành phố Touka, Hoenn \n+Tuổi: 7 \n\n Là em trai của May, Masato đã cùng chị gia nhập nhóm của Satoshi để đi phiêu lưu. Cậu bé rất thích đọc sách và đã đọc tất cả mọi thứ viết về Pokémon. Sau khi cùng Haruka tách khỏi nhóm ở cuối phần Battle Frontier, Masato đã quay trở lại Hoenn để giúp chăm sóc phòng thi đấu của thành phố Touka.", 
				attachment: createReadStream(__dirname + `/noprefix/pokemon/6.jpg`)
			}, threadID, messageID)
              };
                break;
              case "7": {
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "7̵.̵ ̵H̵i̵k̵a̵r̵i̵ \n━━━━━━━━━━━━━━━━ \n+Tên tiếng Anh: Dawn \n+Xuất hiện: Pokemon mùa 10 – mùa 13 \n+Quê hương: Sinnoh \n+Tuổi: 10 \n\n Sau khi tạm biệt Haruka, nhóm của Satoshi đã được bổ sung 1 thành viên mới chính là Hikari tại vùng Sinnoh. Sinh ra ở Sinnoh, Hikari đã giúp Satoshi và Takeshi tìm hiểu những điều mới mẻ tại đây và cập nhật các xu hướng phổ biến như Pokétch. \n Sau khi được cổ vũ tham gia và giành chiến thắng trong nhiều cuộc thi, Hikari dần trở nên tự tin hơn vào các kỹ năng của mình. Mặc dù ban đầu dự định đến tham gia các cuộc thi tại Kanto, Hikari đã quyết định tạm biệt Satoshi và Takeshi để ở lại Sinnoh khi Buneary của cô bé được đề nghị làm người mẫu cho một tạp chí Pokémon. Sau đó, cô bé quyết định tới Hoenn để tham gia các cuộc thi ở đó.", 
				attachment: createReadStream(__dirname + `/noprefix/pokemon/7.jpg`)
			}, threadID, messageID)
              };
                break;
              case "8": {
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "8̵.̵ ̵D̵e̵n̵t̵o̵ \n━━━━━━━━━━━━━━━━ \n+Tên tiếng Anh: Cilan \n+Xuất hiện: Pokemon mùa 14 – mùa 16 \n+Quê hương: Thành phố Sanyou, Unov \n\n Dento là một Nhà đánh giá/kiểm định Pokémon hạng A, có khả năng xác định khả năng tương thích giữa Pokémon và người huấn luyện của chúng. Cậu cũng là một trong những thủ lĩnh Nhà thi đấu đầu tiên ở vùng Isshu, cùng với anh em của mình và chuyên về Pokemon hệ cỏ. Sau đó, Dento đã từ bỏ vị trí để tham gia hành trình phiêu lưu cùng Satoshi và Iris trong suốt mùa 14 đến mùa 16 Cilan xuất hiện lại trong tập đặc biệt thứ 6 của Pokemon the Series: XY khi đến vùng Kalos để tham gia một giải đấu câu cá.", 
				attachment: createReadStream(__dirname + `/noprefix/pokemon/8.jpg`)
			}, threadID, messageID)
            };
                break;
              case "9": {
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "9̵.̵ ̵S̵e̵r̵e̵n̵a̵ \n━━━━━━━━━━━━━━━━ \n+Xuất hiện: Pokemon mùa 17 – mùa 19 \n+Quê hương: thị trấn Asame, Kalos \n\n Serena xuất hiện trong Pokemon XY tập 185, là một người biểu diễn Pokémon và là người bạn thời thơ ấu đầu tiên của Satoshi. Cả hai gặp gỡ khi tham dự trại hè Okido ở Thị trấn Masara. Khi ấy, cô bé Serena bị thương ở chân đã được cậu bé Satoshi ấm áp giúp băng bó vết thương. Serena cũng phải lòng Satoshi từ đó. \n Sau khi biết Satoshi đang ở Kalos, Serena đã quyết định rời khỏi nhà để đến gặp và đồng hành cùng cậu. Serena kết thúc hành trình cùng Satoshi khi cô quyết định đến vùng Hoenn để tiếp tục tập luyện.", attachment: createReadStream(__dirname + `/noprefix/pokemon/9.jpg`)
			}, threadID, messageID)
            };
                break;
              case "10": {
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "1̵0̵.̵ ̵S̵h̵i̵t̵o̵r̵o̵n̵ \n━━━━━━━━━━━━━━━━ \n+Tên tiếng Anh: Clemont \n+Xuất hiện: Pokemon mùa 17 – mùa 19 \n+Quê hương: Thành phố Miare, Kalos \n\n Shitoron (còn gọi nhân vật này là Citron) là Thủ lĩnh nhà thi đấu ở Thành phố Miare. Anh là một nhà phát minh trẻ với rất nhiều những phát minh thú vị. Vì ngưỡng mộ Satoshi nên cậu đã theo chân Satoshi từ mùa 17 đến 19 để học hỏi kinh nghiệm và trở thành một Thủ lĩnh nhà thi đấu tốt hơn. \n Satoshi đã đánh bại thành công Shitoron tại nhà thi đấu Miare, có được huy hiệu thứ năm ở vùng Kalos. Tuy nhiên, kết quả trận đấu cuối cùng giữa Satoshi và Shitoron vẫn chưa được xác nhận. Trong số các nhân vật nam của Pokemon, Shitoron có phần khác biệt. Nếu như trước kia, Satoshi luôn được Takeshi và Dento chỉ bảo thì giờ đây, cậu đã trưởng thành hơn và trở thành mentor của Shitoron.", attachment: createReadStream(__dirname + `/noprefix/pokemon/10.jpg`)
			}, threadID, messageID)
            };
                break;
              case "11": {
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "1̵1̵.̵ ̵Y̵u̵r̵i̵k̵a̵ \n━━━━━━━━━━━━━━━━ \n+Tên tiếng Anh: Bonnie \n+Xuất hiện: Pokemon mùa 17 – mùa 19 \n+Quê hương: Thành phố Miare, Kalos \n+Tuổi: 7 \n\n Yurika là em gái 7 tuổi của Shitoron. Dù nhỏ tuổi hơn Shitoron nhưng Yurika lại có suy nghĩ chính chắn hơn anh trai. Do chưa đủ tuổi, Pokémon của Yurika trên danh nghĩa thuộc về Shitoron.", 
				attachment: createReadStream(__dirname + `/noprefix/pokemon/11.jpg`)
      }, threadID, messageID)
            };
                break;
              case "12": {
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "1̵2̵.̵ ̵L̵i̵l̵i̵e̵ \n━━━━━━━━━━━━━━━━ \n+Tên tiếng Anh: Lillie \n+Xuất hiện: \n+Quê hương: Đảo Melemele, Alola \n\nLillie là học sinh của Học viện Pokémon ở Đảo Melemele và cũng là bạn đồng hành cùng Satoshi từ mùa 20 đến 22. Cô có xuất thân từ một gia đình rất giàu có và thường giúp đỡ các học sinh khác. Tuy nhiên, Lillie lại có sợ hãi khi chạm vào bất kỳ loại Pokémon nào. Qua các tập phim, cô bé đã dần học cách vượt qua nỗi sợ ấy và làm quen với Rokon dạng Alola có biệt danh là “Shiron”.  Trong Giải Liên Minh Alola, cô dừng chân ở vòng thứ hai sau thất bại trước anh trai.", 
				attachment: createReadStream(__dirname + `/noprefix/pokemon/12.jpg`)
			}, threadID, messageID)
            };
                break;
              case "13": {
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "1̵3̵.̵ ̵K̵a̵k̵i̵ \n━━━━━━━━━━━━━━━━ \n+Tên tiếng Anh: Kiawe \n+Xuất hiện: Pokemon mùa 20 – 22 \n+Quê hương: Đảo Akala, Alola \n\n Đây là người bạn lớn tuổi và có nhiều kinh nghiệm nhất của Satoshi trong số các nhân vật trong Pokemon từ mùa 20 đến 22. Kaki chuyên về Pokemon hệ lửa và cũng là người duy nhất đã vượt qua thử nghiệm lớn ở Đảo Akala để nhận được Viên đá Z hệ Lửa. Kaki sống cùng gia đình tại trang trại bò sữa trên đảo Akala cùng với cha mẹ và cem gái tên là Hoshi. Cậu đã vào được đến bán kết Giải Liên Minh Alola, nhưng đã phải dừng lại khi thua Gurajio ở trận bán kết đầu tiên của Giải Liên Minh Alola.", 
				attachment: createReadStream(__dirname + `/noprefix/pokemon/13.jpg`)
			}, threadID, messageID)
            };
                break;
              case "14": {
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "1̵4̵.̵ ̵Đ̵ộ̵i̵ ̵H̵ỏ̵a̵ ̵T̵i̵ễ̵n̵ ̵–̵ ̵T̵e̵a̵m̵ ̵R̵o̵c̵k̵e̵t̵ \n━━━━━━━━━━━━━━━━ \n Còn được biết đến với cái tên Nhóm Rocket, đây là tổ chức tội phạm ở khu vực Quần đảo Kanto, Johto và Sevii. Mục tiêu chính của họ là sử dụng Pokémon để thống trị thế giới. \n\n*Các thành viên của đội Hỏa Tiễn: \n+Ngài Sakaki: Ông trùm \n+Musashi \n+Kojiro \n+Nyatsu \n+Kosaburo \n+Yamato \n+Dr. Namba \+Giáo sư Shiranui \n+Zanner \n+Lion \n+Buson \n+Basho", 
				attachment: createReadStream(__dirname + `/noprefix/pokemon/14.jpg`)
			}, threadID, messageID)
            };
                break;
					default:
                let choose = parseInt(body);
                if (isNaN(body)) return api.sendMessage("💟 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", threadID, messageID);
                if (choose > 14 || choose < 1) return api.sendMessage("🔰 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", threadID, messageID);
			}
		}
	}
}

module.exports.run = async ({ api, event, handleReply }) => {
	let { threadID,  senderID } = event;
	return api.sendMessage({body: "[====[ 𝐏𝐎𝐊𝐄𝐌𝐎𝐍 ]====]" +
                "\n\n１. 𝓢𝓪𝓽𝓸𝓼𝓱𝓲\n" +
                "２. 𝓚𝓪𝓼𝓾𝓶𝓲\n" +
                "３. 𝓣𝓪𝓴𝓮𝓼𝓱𝓲\n" +
                "４. 𝓚𝓮𝓷𝓳𝓲\n" +
                "５. 𝓗𝓪𝓻𝓾𝓴𝓪\n" +
                "６. 𝓜𝓪𝓼𝓪𝓽𝓸\n" +
                "７. 𝓗𝓲𝓴𝓪𝓻𝓲\n" +
                "８. 𝓘𝓻𝓲𝓼\n" +
                "９. 𝓓𝓮𝓷𝓽𝓸\n" +
                "１０. 𝓢𝓮𝓻𝓮𝓷𝓪\n" +
                "１１. 𝓢𝓱𝓲𝓽𝓸𝓻𝓸𝓷\n" +
                "１２. 𝓨𝓾𝓻𝓲𝓴𝓪\n" +
                "１３. 𝓚𝓪𝓴𝓲\n" +
                "１４. Đ𝓸̣̂𝓲 𝓗𝓸̉𝓪 𝓣𝓲𝓮̂̃𝓷 – 𝓣𝓮𝓪𝓶 𝓡𝓸𝓬𝓴𝓮𝓽" +
                "\n\n🦋 𝑹𝒆𝒑𝒍𝒚 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒕𝒉𝒆𝒐 𝒔𝒐̂́ đ𝒆̂̉ 𝒙𝒆𝒎 𝒕𝒉𝒆̂𝒎 𝒗𝒆̂̀ 𝒕𝒖̛̀𝒏𝒈 𝒏𝒉𝒂̂𝒏 𝒗𝒂̣̂𝒕 🌸"
            }, threadID, (error, info) => {
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: senderID,
            messageID: info.messageID
        })
    })
}
