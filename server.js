const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// Create the app, setup the webpack middleware
const app = express();

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

var routes = require("./scripts/routes.js");
app.use("/", routes);

const server = new http.Server(app);
const io = require('./scripts/sockets.js').listen(server);
//const io = require("./scripts/sockets.js").listen(server);

const PORT = process.env.PORT || 8080;

server.listen(PORT);






