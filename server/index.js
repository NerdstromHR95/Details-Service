const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
	next();
})
app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

app.get('/details/item', function(req, res) {
	db.getFirstItem(function(items) {
		res.send(items);
	});
});

app.get('/details/mensShirtSize', function(req, res) {
	db.getMensShirtSizes(function(items) {
		res.send(items);
	});
});

app.get('/details/mensPantsSize', function(req, res) {
	db.getMensPantsSizes(function(items) {
		res.send(items);
	});
});

app.get('/details/mensShortsSize', function(req, res) {
	db.getMensShortsSizes(function(items) {
		res.send(items);
	});
});

app.get('/details/womensDressSize', function(req, res) {
	db.getWomensDressSizes(function(items) {
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
		res.send(items);
	});
});

app.get('/details/womensShirtSize', function(req, res) {
	db.getWomensShirtSizes(function(items) {
		res.send(items);
	});
});

app.listen(3004, function() {
	console.log('Listening on port 3004...');
});