const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:clothing');

let itemSchema = mongoose.schema({
	title: String,
	brand: String,
	price: String,
	description: String
});

let Item = mongoose.model('Item', itemSchema);

Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive polo'})
Item.create({title: 'Oxford Polo', brand: 'BURBERRY', price: '$170.00', description: 'A fancy polo'})
Item.create({title: 'Bedford Polo', brand: 'VERSACE', price: '$145.00', description: 'A cool polo'})
Item.create({title: 'Trim Fit Polo', brand: 'VERSACE', price: '$125.00', description: 'A plain polo'})
Item.create({title: 'Jersey Polo', brand: 'VERSACE', price: '$195.00', description: 'A polo with an emblem'})
Item.create({title: 'Haystack Sport Shirt', brand: 'ROBERT GRAHAM', price: '$112.00', description: 'A cotton shirt'})
Item.create({title: 'Classic Sport Shirt', brand: 'ROBERT GRAHAM', price: '$120.00', description: 'A regular shirt'})
Item.create({title: 'Hillpunch Shirt', brand: 'ROBERT GRAHAM', price: '$110.00', description: 'An awesome shirt'})
Item.create({title: 'Traditional Dress Shirt', brand: 'NORDSTROM', price: '$40.00', description: 'A plain dress shirt'})
Item.create({title: 'Pinpoint Dress Shirt', brand: 'NORDSTROM', price: '$40.00', description: 'A well-fitted dress shirt'})
Item.create({title: 'Weekday Warriors Cotton Pants', brand: 'BONOBOS', price: '$70.00', description: 'Lightweight wrinkle-resistant cotton pants'})
Item.create({title: 'Straight Leg Stretch Washed Chinos', brand: 'BONOBOS', price: '$60.00', description: 'Stretchy cotton pants'})
Item.create({title: 'Cropped Twill Trousers', brand: 'TOPMAN', price: '$42.00', description: 'Skinny fit sporty trousers'})
Item.create({title: 'Flat Front Wool Pants', brand: 'NORDSTROM', price: '$70.00', description: 'Excellent dress pants'})
Item.create({title: 'Banded Track Pants', brand: 'KAPPA', price: '$100.00', description: 'Terrific track pants'})
Item.create({title: 'Flat Front Cotton Pants', brand: 'BRAX', price: '$118.00', description: 'An expensive pair of pants'})
Item.create({title: 'Skinny Fit Trousers', brand: 'TOPMAN', price: '$100.00', description: 'Great looking skinny pants'})
Item.create({title: 'Jordan Dry 23 Alpha Pants', brand: 'NIKE', price: '$25.00', description: 'Workout pants with Jordan symbol'})
Item.create({title: 'Crop Smart Joggers', brand: 'TOPMAN', price: '$70.00', description: 'Very expensive jogging pants'})
Item.create({title: 'Cotton Cargo Pants', brand: 'JOHN VARVATOS', price: '$120.00', description: 'Pants with a lot of pockets'})
Item.create({title: 'Henley Sweater', brand: 'BONOBOS', price: '$48.00', description: 'A sweater with buttons'})
Item.create({title: 'V-Neck Sweater', brand: 'NORDSTROM', price: '$35.00', description: 'A cotton and cashmere sweater'})
Item.create({title: 'Cashmere V-Neck Sweater', brand: 'JOHN NORDSTROM', price: '$170.00', description: 'A very expensive sweater'})
Item.create({title: 'Crewneck Sweater', brand: 'GIVENCHY', price: '$960.00', description: 'An absurdly expensive sweater'})
Item.create({title: 'Slim Fit Cardigan', brand: 'TOPMAN', price: '$65.00', description: 'A 5-button cotton cardigan'})
Item.create({title: 'Quarter-zip Pullover', brand: 'PETER MILLAR', price: '$145.00', description: 'A sweater with a short zipper'})
Item.create({title: 'Wool Crewneck Sweater', brand: 'BURBERRY', price: '$240.00', description: 'A greal looking sweater'})
Item.create({title: 'Linin Blend Henley', brand: 'NORDSTROM', price: '$35.00', description: 'A 3-button sweater'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})
Item.create({title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'An expensive shirt'})

const getAllItems = function(callback) {
	Item.find().exec(function(err, results) {
		if (err) {
			console.log("Item query error", err)
		}
		callback(results)
	});
}

let colorSchema = mongoose.schema({
	color: String
});

let Color = mongoose.model('Color', colorSchema);

Color.create({color: white});
Color.create({color: black});
Color.create({color: blue});
Color.create({color: red});
Color.create({color: green});

const getAllColors = function(callback) {
	Color.find().exec(function(err, results) {
		if (err) {
			console.log("Color query error", err);
		}
		callback(results);
	})
}

let sizeSchema = mongoose.schema({
	size: String
});

let Size = mongoose.model('Size', sizeSchema);

Size.create({size: s});
Size.create({size: m});
Size.create({size: l});

const getAllSizes = function(callback) {
	Size.find().exec(function(err, results) {
		if (err) {
			console.log("Size query error", err);
		}
		callback(results);
	})
}

module.exports.getAllItems = getAllItems;
module.exports.getAllColors = getAllColors;
module.exports.getAllSizes = getAllSizes;