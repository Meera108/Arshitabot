module.exports.config = {
	name: "unsend",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐃𝐞𝐯 𝐕𝐚𝐫𝐝𝐡𝐚𝐧",
	description: "Gỡ tin nhắn của bot",
	commandCategory: "system",
	usages: "unsend",
	cooldowns: 0
};

module.exports.languages = {
	"vi": {
		"returnCant": "Không thể gỡ tin nhắn của người khác.",
		"missingReply": "Hãy reply tin nhắn cần gỡ."
	},
	"en": {
		"returnCant": "Kisi Aur Ka Msg M Kese Unsend Karu.",
		"missingReply": "Mere Jis Msg ko Unsend Karna Hai Usme Reply Karke Likkho."
               "UnsendSuccess": 
"Is Bar Kar Rahi Agli Bar Nhi Karungi Bata Rahi."
	}
}

module.exports.run = function({ api, event, getText }) {
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText("returnCant"), event.threadID, event.messageID);
	if (event.type != "message_reply") return api.sendMessage(getText("missingReply"), event.threadID, event.messageID);
	return
	if (event.type != "UnsendSuccess")
api.sendMessage(getText("missingReply"), event.threadID, event.messageID);
 return api.unsendMessage(event.messageReply.messageID);
	}