var socket = io();

$(document).ready(function() {
	var user = "stranger";
	var url = window.location.pathname;
	var urlsplit = url.split("/");
	var room = {
		room: urlsplit[urlsplit.length - 1],
		data: {}
	};

	console.log(url);
	console.log(room);

	socket.emit("findRoom", room);

	$("#nameSub").click(function() {
		user = $('#name').val();
		$("#data").hide();
	});

	$("#submit").click(function() {
		room.data = {
			name: user,
			msg: $('#inp').val()
		}

	    socket.emit('chatmessage', room);
	    $('#inp').val('');
	});

	socket.on('message', function(data) {
		$("#messages").append("<p>" + data.name + ": " + data.msg + "</p>");
	});

	socket.on('disc', function(data) {
		$("#messages").append("<p>" + data.msg + "</p>");
	});

	$(window).bind("beforeunload", function() { 
		room.data = {
			name: user,
			msg: "User has Disconnected"
		}
	    socket.emit('messageDisc', room);
	});
}); 