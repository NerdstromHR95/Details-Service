const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

app.get('/item', function(req, res) {
	db.getFirstItem(function(items) {
		res.send(items);
	});
});

app.get('/mensShirtSize', function(req, res) {
	db.getMensShirtSizes(function(items) {
		res.send(items);
	});
});

app.get('/mensPantsSize', function(req, res) {
	db.getMensPantsSizes(function(items) {
		res.send(items);
	});
});

app.get('/mensShortsSize', function(req, res) {
	db.getMensShortsSizes(function(items) {
		res.send(items);
	});
});

app.get('/womensDressSize', function(req, res) {
	db.getWomensDressSizes(function(items) {
		res.send(items);
	});
});

app.get('/womensShirtSize', function(req, res) {
	db.getWomensShirtSizes(function(items) {
		res.send(items);
	});
});

app.listen(3004, function() {
	console.log('Listening on port 3004...');
});