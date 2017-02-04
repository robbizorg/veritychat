var express = require('express');
var router = express.Router();
var config = require('../config.js');
var uuid = require('node-uuid');
var manager = require('./chatManager.js');

// Home Page
router.post('/genchat', function(req, res){
	/* Prev Code No longer needed
	console.log(req.body);
	var data = req.body;
	data.url = config.url + uuid.v4();
	
	var partner = manager.getStatus(data);
	if (partner == data)
	var response = {
		url: data.url,
		status: status,//status,
	}
	res.send(response);
	*/

	var url = config.url + "chat/" + uuid.v4();

	res.send(url);

});

router.get('/chat/:link', function(req, res) {
	res.render('index');
})

module.exports = router;