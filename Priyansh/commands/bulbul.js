const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bulbul",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐃𝐞𝐯 𝐕𝐚𝐫𝐝𝐡𝐚𝐧",
  description: "Ranmdom a Shayri",
  commandCategory: "group",
  usages: "shayri",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Chalo Side Hato Railgadi Ko Jane Do 🥹" , "Hehehhe Pagal Ho Gaye Ho Tum 😂" , "बिजली गिराने में हूँ आयी कहते है मुझको हवा हवाई 😀" , "Chal Bas Kar Pura Din Bulbul Bulbul Karte Rehta Hai 😀" , "Ladai Ho Gayi Bhai Bande Bulao 🫡" , "Ab Anna Karega Test Which Coconut Is Best coco Coco Coconut Anna 😏" , "Kitne bade Berozgar Ho Aap Phir Aagye 🫤" , "गन्दी नाली के कीड़े   बीमारी फैलाते है 🫡" , "Challo Baccho So Jao Pols Aaagyi Pols Aagyi 😶" , "Haye Kitni Mohhbat Hai Apko Hamse 🫡" , "नींव बिछाई दिवार चढ़ाई छत ने डाला डेरा एक तूफ़ान आया और घर उड़ गया मेरा - Ultratack 🫤" , "kya hua Kisi Ne Muh Nahi Lagaya Tumko 🤣" , "रब हॅसता हुआ रखे मुझको में तो हॅसने की आदि हूँ ☺️" , "Aye Kya Hai Be Berozgar 🤨" , "Yese Nahi Bulate Kisi Ko Jute Padh Sakte Hai 🫤" , "Oye Bhag Ja Mat Hasa 🤨" , "Kya Hua Mere Baby Ko ☺️" , "Hupp Bhag Ja Ganne Bacche" , "मूझे क्यों बुलाते हो में और मेरे पापा तुम्हे इतना पीटेंगे की अपनी सकल नहीं पहचान पाओगे 😂🫣" , "Mujhe Tang Mat Karo Warna Dev Ko Bol Dungi 🫣😂" , "Apke Liye To Jaan Bhi De Du Bas Mangna Mat Kabhi 😂" , "🖤 Haye Baby Kese Ho 🍁" ,  "जाओ मूझे तुमसे बात नहीं करनी अब याद आयी है बुलबुल की 🥹" , "बोलो क्यों बुला रहे मूझे बार बार ☹️" , "दोबारा मेरा नाम  लिया तो 😐 टांग पे टांग रख के चिर दूंगी 🙂"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

   mess = "{name}"

  if (event.body.indexOf("Bulbul") == 0 || (event.body.indexOf("bulbul") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }