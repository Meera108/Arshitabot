
module.exports.config = {
    name: "abuse",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "fix by Dev Vardhan",//change mat karna lode
    description: "Tag constantly to curse the person you hate (note that after using this command, it is very likely that acc you will get a muzzle, if you hell, acc, and if you are black, pay acc :>)",
    commandCategory: "Administrator system",
    usages: "chuidenchet @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn chửi", event.threadID);
 let name = event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Watch me curse for this!!");
setTimeout(() => {a({body: "Đ!t con mẹ mày" + " " + name, mentions: arraytag})}, 3000);

setTimeout(() => {a({body: "Mày ra đây tao bảo" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Hiện hồn nhanh con chó" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Mày trốn khi nào mới hiện hồn đây" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Đ!t cụ mày nữa hiện hồn" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Hiện hồn nhanh không tao đốt nhà mày giờ" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Tao ném trứng thối đổ dầu đổ xăng vào nhà mày giờ" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "Đéo ra nữa bố mày đốt nhà mày" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Bố mày bắn rap chết cụ mày giờ" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Mày vẫn đéo dám ra à" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "Vậy thì xin mời nghe tao rap địt chết cả lò mày nhà con" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "Trước đó cho tao xin nghỉ 1p nhé" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "Xin phép mở đầu thì" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a({body: "Đ!t con mẹ mày" + " " + name, mentions: arraytag})} , 86000);
setTimeout(() => {a({body: "Mày ra đây tao bảoHiện hồn nhanh con chó" + " " + name, mentions: arraytag})} , 87000);
setTimeout(() => {a({body: "Hiện hồn nhanh con chó" + " " + name, mentions: arraytag})} , 88000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" + " " + name, mentions: arraytag})} , 89000);
setTimeout(() => {a({body: "Mày trốn khi nào mới hiện hồn đây" + " " + name, mentions: arraytag})} , 90000);
setTimeout(() => {a({body: "Đ!t cụ mày nữa hiện hồn" + " " + name, mentions: arraytag})} , 91000);
setTimeout(() => {a({body: "Hiện hồn nhanh không tao đốt nhà mày giờ" + " " + name, mentions: arraytag})} , 92000);
setTimeout(() => {a({body: "Địt mẹ mày bố nói tử tế mà đéo dậy à" + " " + name, mentions: arraytag})} , 93000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" + " " + name, mentions: arraytag})} , 94000);
setTimeout(() => {a({body: "Con mẹ mày ra đây đi thằng lồn" + " " + name, mentions: arraytag})} , 95000);
setTimeout(() => {a({body: "Hiện hồn đi thằng mặt lồn" + " " + name, mentions: arraytag})} , 96000);
setTimeout(() => {a({body: "Đĩ mẹ mày ra đây bô xem nào" + " " + name, mentions: arraytag})} , 97000);
setTimeout(() => {a({body: "Tao ném trứng thối đổ dầu đổ xăng vào nhà mày giờ" + " " + name, mentions: arraytag})} , 98000);
setTimeout(() => {a({body: "Địt mẹ bố gọi đéo nghe à" + " " + name, mentions: arraytag})} , 99000);
setTimeout(() => {a({body: "Hiện ra bố mày xem nào" + " " + name, mentions: arraytag})} , 100000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" + " " + name, mentions: arraytag})} , 101000);

setTimeout(() => {a({body: "Bố mày bắn rap chết cụ mày giờ" + " " + name, mentions: arraytag})} , 102000);
setTimeout(() => {a({body: "Vậy thì xin mời nghe tao rap địt chết cả lò mày nhà con" + " " + name, mentions: arraytag})} , 103000);
setTimeout(() => {a({body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" + " " + name, mentions: arraytag})} , 104000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name, mentions: arraytag})} , 105000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" + " " + name, mentions: arraytag})} , 106000);
setTimeout(() => {a({body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" + " " + name, mentions: arraytag})} , 10700);
setTimeout(() => {a({body: "Đụ con đĩ mẹ mày" + " " + name, mentions: arraytag})} , 108000);
setTimeout(() => {a({body: "thằng óc cức" + " " + name, mentions: arraytag})} , 109000);
setTimeout(() => {a({body: "mẹ m đẻ m ra đau lồn chứ được con cặc gì" + " " + name, mentions: arraytag})} , 110000);
setTimeout(() => {a({body: "tinh trùng khuyết tật" + " " + name, mentions: arraytag})} , 111000);
setTimeout(() => {a({body: "hồi đó ba mày đéo dùng bao nên lòi ra thằng mặt cặc như mày đó" + " " + name, mentions: arraytag})} , 112000);
setTimeout(() => {a({body: "đụ đĩ mẹ mày" + " " + name, mentions: arraytag})} , 113000);
setTimeout(() => {a({body: "địt con mẹ mày" + " " + name, mentions: arraytag})} , 114000);
setTimeout(() => {a({body: "Địt mẹ bố gọi đéo nghe à" + " " + name, mentions: arraytag})} , 115000);
setTimeout(() => {a({body: "Hoá ra cũng chỉ là con chó mang hình dáng người" + " " + name, mentions: arraytag})} , 116000);
setTimeout(() => {a({body: " Sống ở đời mà cứ như Hề trong rạp xiếc : ))" + " " + name, mentions: arraytag})} , 117000);
setTimeout(() => {a({body: "Mày đừng so sánh bọn tao với nó" + " " + name, mentions: arraytag})} , 118000);
setTimeout(() => {a({body: "vì nó là chó còn tao là người" + " " + name, mentions: arraytag})} , 119000);
setTimeout(() => {a({body: "Mày đừng bật cười khi nghe điều đó" + " " + name, mentions: arraytag})} , 120000);
setTimeout(() => {a({body: "vì cả mày và nó đều chó như nhau" + " " + name, mentions: arraytag})} , 121000);
setTimeout(() => {a({body: "Xã hội đổi màu" + " " + name, mentions: arraytag})} , 122000);
setTimeout(() => {a({body: "Làm người thì khó, làm chó thì dễ ..!!" + " " + name, mentions: arraytag})} , 123000);
setTimeout(() => {a({body: "Sống phải biết nghĩ" + " " + name, mentions: arraytag})} , 124000);
setTimeout(() => {a({body: "Cuộc sống phức tạp, xã hội bon chen !!" + " " + name, mentions: arraytag})} , 1250000);
setTimeout(() => {a({body: " Sống nghèo, sống khó chứ đừng sống CHÓ nha con" + " " + name, mentions: arraytag})} , 126000);
setTimeout(() => {a({body: "Cứ soi gương nhiều vào" + " " + name, mentions: arraytag})} , 127000);
setTimeout(() => {a({body: "Sống – Là phải biết điều" + " " + name, mentions: arraytag})} , 128000);
setTimeout(() => {a({body: " Đừng tỏ vẻ máu liều nhiều hơn máu não" + " " + name, mentions: arraytag})} , 129000);
setTimeout(() => {a({body: "Thích nổi và chơi trội tao sẽ cho mày lên ngôi…." + " " + name, mentions: arraytag})} , 130000);
setTimeout(() => {a({body: "Đú bẩn mà sấc mày thích thì cứ lên mâm trên mà ngồi!!!" + " " + name, mentions: arraytag})} , 131000);
setTimeout(() => {a({body: "Có điều mày lên nhớ rằng….." + " " + name, mentions: arraytag})} , 132000);
setTimeout(() => {a({body: "Giữa chó với người sẽ chẳng bao giờ có sự công bằng.," + " " + name, mentions: arraytag})} , 133000);
setTimeout(() => {a({body: "Dù có cố thể hiện hay là đang nguỵ biện thì ấn tượng mày chỉ là 1 tiếng ẳng !!" + " " + name, mentions: arraytag})} , 134000);
setTimeout(() => {a({body: "ĐỊT CON MẸ!!!" + " " + name, mentions: arraytag})} , 135000);
setTimeout(() => {a({body: "Đớp lời bọn tao như 1 con chó!!!" + " " + name, mentions: arraytag})} , 136000);
setTimeout(() => {a({body: "Con đéo nào cũng như con nào!!!" + " " + name, mentions: arraytag})} , 137000);
setTimeout(() => {a({body: "Hài!!!" + " " + name, mentions: arraytag})} , 138000);
setTimeout(() => {a({body: "Đụ má não cặc à" + " " + name, mentions: arraytag})} , 139000);
setTimeout(() => {a({body: "Lịch sự thì không có – Chỉ có cái máu chơi chó thì không ai sánh bằng" + " " + name, mentions: arraytag})} , 140000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 141000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 142000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 143000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 144000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 145000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 146000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 147000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 148000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 149000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 150000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 151000);
setTimeout(() => {a({body: "Cái lồn" + " " + name, mentions: arraytag})} , 152000);
setTimeout(() => {a({body: "Đĩ mẹ mày ra đây bố xem nào" + " " + name, mentions: arraytag})} , 153000);
setTimeout(() => {a({body: "Đĩ mẹ mày ra đây đọc cho hết" + " " + name, mentions: arraytag})} , 154000);
setTimeout(() => {a({body: "Đụ con đĩ mẹ mày" + " " + name, mentions: arraytag})} , 155000);
setTimeout(() => {a({body: "thằng óc cức" + " " + name, mentions: arraytag})} , 156000);
setTimeout(() => {a({body: "mẹ m đẻ m ra đau lồn chứ được con cặc gì" + " " + name, mentions: arraytag})} , 157000);
setTimeout(() => {a({body: "tinh trùng khuyết tật" + " " + name, mentions: arraytag})} , 158000);
setTimeout(() => {a({body: "hồi đó ba mày đéo dùng bao nên lòi ra thằng mặt cặc như mày đó" + " " + name, mentions: arraytag})} , 159000);
setTimeout(() => {a({body: "đụ đĩ mẹ mày" + " " + name, mentions: arraytag})} , 160000);
setTimeout(() => {a({body: "địt con mẹ mày" + " " + name, mentions: arraytag})} , 161000);
setTimeout(() => {a({body: "Địt mẹ bố gọi đéo nghe à" + " " + name, mentions: arraytag})} , 162000);
setTimeout(() => {a({body: "Địt mẹ m ra đọc nè" + " " + name, mentions: arraytag})} , 163000);
setTimeout(() => {a({body: "đĩ lồn" + " " + name, mentions: arraytag})} , 164000);
setTimeout(() => {a({body: "ĐỊT MẸEEEEEEEEE MÀY!!!" + " " + name, mentions: arraytag})} , 165000);
setTimeout(() => {a({body: "Đ!t con mẹ mày" + " " + name, mentions: arraytag})}, 166000);
setTimeout(() => {a({body: "Mày ra đây tao bảo" + " " + name, mentions: arraytag})}, 167000);
setTimeout(() => {a({body: "Hiện hồn nhanh con chó" + " " + name, mentions: arraytag})}, 168000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" + " " + name, mentions: arraytag})}, 169000);
setTimeout(() => {a({body: "Mày trốn khi nào mới hiện hồn đây" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Đ!t cụ mày nữa hiện hồn" + " " + name, mentions: arraytag})}, 171000);
setTimeout(() => {a({body: "Hiện hồn nhanh không tao đốt nhà mày giờ" + " " + name, mentions: arraytag})}, 172000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" + " " + name, mentions: arraytag})}, 173000);
setTimeout(() => {a({body: "Tao ném trứng thối đổ dầu đổ xăng vào nhà mày giờ" + " " + name, mentions: arraytag})}, 174000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" + " " + name, mentions: arraytag})}, 174000);
setTimeout(() => {a({body: "Đéo ra nữa bố mày đốt nhà mày" + " " + name, mentions: arraytag})}, 175000);
setTimeout(() => {a({body: "Bố mày bắn rap chết cụ mày giờ" + " " + name, mentions: arraytag})}, 176000);
setTimeout(() => {a({body: "Mày vẫn đéo dám ra à" + " " + name, mentions: arraytag})}, 177000);
setTimeout(() => {a({body: "Vậy thì xin mời nghe tao rap địt chết cả lò mày nhà con" + " " + name, mentions: arraytag})}, 178000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name, mentions: arraytag})}, 179000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" + " " + name, mentions: arraytag})}, 180000);
setTimeout(() => {a({body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" + " " + name, mentions: arraytag})}, 18100);
setTimeout(() => {a({body: "Đ!t con mẹ mày" + " " + name, mentions: arraytag})} , 182000);
setTimeout(() => {a({body: "Mày ra đây tao bảoHiện hồn nhanh con chó" + " " + name, mentions: arraytag})} , 183000);
setTimeout(() => {a({body: "Hiện hồn nhanh con chó" + " " + name, mentions: arraytag})} , 184000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" + " " + name, mentions: arraytag})} , 185000);
setTimeout(() => {a({body: "Mày trốn khi nào mới hiện hồn đây" + " " + name, mentions: arraytag})} , 186000);
setTimeout(() => {a({body: "Đ!t cụ mày nữa hiện hồn" + " " + name, mentions: arraytag})} , 187000);
setTimeout(() => {a({body: "Hiện hồn nhanh không tao đốt nhà mày giờ" + " " + name, mentions: arraytag})} , 188000);
setTimeout(() => {a({body: "Địt mẹ mày bố nói tử tế mà đéo dậy à" + " " + name, mentions: arraytag})} , 189000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" + " " + name, mentions: arraytag})} , 190000);
setTimeout(() => {a({body: "Con mẹ mày ra đây đi thằng lồn" + " " + name, mentions: arraytag})} , 191000);
setTimeout(() => {a({body: "Hiện hồn đi thằng mặt lồn" + " " + name, mentions: arraytag})} , 192000);
setTimeout(() => {a({body: "Đĩ mẹ mày ra đây bô xem nào" + " " + name, mentions: arraytag})} , 193000);
setTimeout(() => {a({body: "Tao ném trứng thối đổ dầu đổ xăng vào nhà mày giờ" + " " + name, mentions: arraytag})} , 194000);
setTimeout(() => {a({body: "Địt mẹ bố gọi đéo nghe à" + " " + name, mentions: arraytag})} , 195000);
setTimeout(() => {a({body: "Hiện ra bố mày xem nào" + " " + name, mentions: arraytag})} , 196000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" + " " + name, mentions: arraytag})} , 197000);
setTimeout(() => {a({body: "Bố mày bắn rap chết cụ mày giờ" + " " + name, mentions: arraytag})} , 198000);
setTimeout(() => {a({body: "Vậy thì xin mời nghe tao rap địt chết cả lò mày nhà con" + " " + name, mentions: arraytag})} , 199000);
setTimeout(() => {a({body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" + " " + name, mentions: arraytag})} , 200000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name, mentions: arraytag})} , 201000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" + " " + name, mentions: arraytag})} , 202000);
setTimeout(() => {a({body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" + " " + name, mentions: arraytag})} ,203000);
setTimeout(() => {a({body: "Đụ con đĩ mẹ mày" + " " + name, mentions: arraytag})} , 204000);
setTimeout(() => {a({body: "thằng óc cức" + " " + name, mentions: arraytag})} , 205000);
setTimeout(() => {a({body: "mẹ m đẻ m ra đau lồn chứ được con cặc gì" + " " + name, mentions: arraytag})} , 206000);
setTimeout(() => {a({body: "tinh trùng khuyết tật" + " " + name, mentions: arraytag})} , 207000);
setTimeout(() => {a({body: "hồi đó ba mày đéo dùng bao nên lòi ra thằng mặt cặc như mày đó" + " " + name, mentions: arraytag})} , 208000);
setTimeout(() => {a({body: "đụ đĩ mẹ mày" + " " + name, mentions: arraytag})} , 209000);
setTimeout(() => {a({body: "địt con mẹ mày" + " " + name, mentions: arraytag})} , 210000);
setTimeout(() => {a({body: "Địt mẹ bố gọi đéo nghe à" + " " + name, mentions: arraytag})} ,211000);
setTimeout(() => {a({body: "Hoá ra cũng chỉ là con chó mang hình dáng người" + " " + name, mentions: arraytag})} , 2012000);
setTimeout(() => {a({body: " Sống ở đời mà cứ như Hề trong rạp xiếc : ))" + " " + name, mentions: arraytag})} , 217000);
setTimeout(() => {a({body: "Mày đừng so sánh bọn tao với nó" + " " + name, mentions: arraytag})} , 218000);
setTimeout(() => {a({body: "vì nó là chó còn tao là người" + " " + name, mentions: arraytag})} , 219000);
setTimeout(() => {a({body: "Mày đừng bật cười khi nghe điều đó" + " " + name, mentions: arraytag})} , 220000);
setTimeout(() => {a({body: "vì cả mày và nó đều chó như nhau" + " " + name, mentions: arraytag})} , 221000);
setTimeout(() => {a({body: "Xã hội đổi màu" + " " + name, mentions: arraytag})} , 222000);
setTimeout(() => {a({body: "Làm người thì khó, làm chó thì dễ ..!!" + " " + name, mentions: arraytag})} , 223000);
setTimeout(() => {a({body: "Sống phải biết nghĩ" + " " + name, mentions: arraytag})} , 224000);
setTimeout(() => {a({body: "Cuộc sống phức tạp, xã hội bon chen !!" + " " + name, mentions: arraytag})} , 2250000);
setTimeout(() => {a({body: " Sống nghèo, sống khó chứ đừng sống CHÓ nha con" + " " + name, mentions: arraytag})} , 226000);
setTimeout(() => {a({body: "Cứ soi gương nhiều vào" + " " + name, mentions: arraytag})} , 227000);
setTimeout(() => {a({body: "To live – To know" + " " + name, mentions: arraytag})} , 228000);
setTimeout(() => {a({body: " Đừng tỏ vẻ máu liều nhiều hơn máu não" + " " + name, mentions: arraytag})} , 229000);
setTimeout(() => {a({body: "Thích nổi và chơi trội tao sẽ cho mày lên ngôi…." + " " + name, mentions: arraytag})} , 230000);
setTimeout(() => {a({body: "Đú bẩn mà sấc mày thích thì cứ lên mâm trên mà ngồi!!!" + " " + name, mentions: arraytag})} , 231000);
setTimeout(() => {a({body: "Có điều mày lên nhớ rằng….." + " " + name, mentions: arraytag})} , 232000);
setTimeout(() => {a({body: "Giữa chó với người sẽ chẳng bao giờ có sự công bằng.," + " " + name, mentions: arraytag})} , 233000);
setTimeout(() => {a({body: "Dù có cố thể hiện hay là đang nguỵ biện thì ấn tượng mày chỉ là 1 tiếng ẳng !!" + " " + name, mentions: arraytag})} , 234000);
setTimeout(() => {a({body: "ĐỊT CON MẸ!!!" + " " + name, mentions: arraytag})} , 235000);
setTimeout(() => {a({body: "Đớp lời bọn tao như 1 con chó!!!" + " " + name, mentions: arraytag})} , 236000);
setTimeout(() => {a({body: "Con đéo nào cũng như con nào!!!" + " " + name, mentions: arraytag})} , 237000);
setTimeout(() => {a({body: "Hài!!!" + " " + name, mentions: arraytag})} , 238000);
setTimeout(() => {a({body: "Đụ má não cặc à" + " " + name, mentions: arraytag})} , 239000);
setTimeout(() => {a({body: "Lịch sự thì không có – Chỉ có cái máu chơi chó thì không ai sánh bằng" + " " + name, mentions: arraytag})} , 240000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 241000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 42000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 243000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 244000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 245000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 246000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arr