var socket = io();

$(document).ready(function() {
	var url = window.location.pathname;
	var urlsplit = url.split("/");
	var room = {
		room: urlsplit[urlsplit.length - 1],
		data: {}
	};

	console.log(url);
	console.log(room);

	socket.emit("findRoom", room);

	$("#submit").click(function() {
		room.data = {
			name: "Robbie",
			msg: $('#inp').val()
		}

	    socket.emit('chatmessage', room);
	    $('#inp').val('');
	});

	socket.on('message', function(data) {
		$("body").append("<p>" + data.name + ": " + data.msg + "</p>");
	});

	socket.on('disc', function(data) {
		$("body").append("<p>" + data.msg + "</p>");
	});

	$(window).bind("beforeunload", function() { 
		room.data = {
			name: "Robbie",
			msg: "User has Disconnected"
		}
	    socket.emit('messageDisc', room);
	});
}); 