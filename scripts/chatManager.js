var manager = {};
manager.chats = {};

/*
topic: {
	strongcons: 0-20,
	stronglibs: 81-100 
	modcons: 21-40,
	modlibs: 61-80,
	mod: 40-60,
	
	
}

*/

/*
Going to get Political Leaning, Article Url, Topic
*/
manager.getStatus = function(data) {
	var topic = data.topic;
	var bucket = Math.floor(data.leaning/20);
	console.log("Political Bucket: " + bucket);

	if (manager.chats[topic]) {
		// Check if Someone Already in Topic
		for (var i = (bucket + 1) % 5; i<5; i++) {
			if (manager.chats[topic][i]) {
				return manager.chats[topic][i].pop();
			}
		}

		// If made it to this point, no one in topic
		manager.chats[topic][bucket][data.user] = data;
		return 0;

	} else {

		manager.chats[topic] = {
			"0": {},
			"1": {},
			"2": {},
			"3": {},
			"4": {}
		};
		manager.chats[topic][bucket][data.user] = data;

		return data;
	}
}



manager.remove = function(url) {
	console.log("Something here...");
}

module.exports = manager;