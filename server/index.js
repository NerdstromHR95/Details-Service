const express = require('express');
const bodyParser = ('body-parser');
const db = require('../database/index.js');
const $ = require('jquery');

const app = express();

app.use(express.static('../public'));

app.use(bodyParser.json());

app.get('/items', function(req, res) {
	db.getAllItems(function(items) {
		res.send(items);
	});
});

app.get('/colors', function(req, res) {
	db.getAllColors(function(colors) {
		res.send(colors);
	});
});

app.get('/sizes', function(req, res) {
	db.getAllSizes(function(sizes) {
		res.send(sizes);
	});
});

app.listen(3000, function() {
	console.log('Listening on port 3000...');
});