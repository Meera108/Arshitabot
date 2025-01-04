module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝗗𝗲𝘃 𝗩𝗮𝗿𝗱𝗵𝗮𝗻",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`Are Yar Ab Tujhe Kese Add Karu Me ${name} Bhagode :( `, event.threadID)
   } else api.sendMessage(`O Bhai Rukja Kyu Bhag Rha ${name} Ye Bulbul Tujhe Jane Nhi Degi 🙂`, event.threadID);
  })
 }
}
