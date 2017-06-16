var login = require("facebook-chat-api");
 
var answeredThreads = {};
 
// Create simple echo bot
login({email: "grayhathacker1997@gmail.com", password: "215437331234"}, function callback (err, api) {
    if(err) return console.error(err);
 
    api.listen(function callback(err, message) {
        console.log(message.threadID);
        if(!answeredThreads.hasOwnProperty(message.threadID)){
            answeredThreads[message.threadID] = true;
            api.sendMessage("Xin chào bạn,đây là tin nhắn trả lời tự động :P . Hiện tại tôi không trả lời được. Cảm ơn bạn đã quan tâm <3.", message.threadID);
        }
    });
});