var socketio = require('socket.io');

module.exports.listen = function(app) {
	io = socketio.listen(app);
	var mainRoom;

	io.on('connection', function(socket) {
		socket.on('findRoom', function(room) {
			socket.join(room.room);
		});
		/*
		socket.on('disconnect', function() {
			console.log(mainRoom);
			io.to(mainRoom).emit('message', 'Partner has Disconnect');
		}); */

		socket.on('chatmessage', function(room) {
			console.log(room.data);
			console.log(room.room);
			console.log("");
			io.to(room.room).emit('message', room.data);
		});

		socket.on('messageDisc', function(room) {
			io.to(room.room).emit('disc', room.data);
		});
	});
}