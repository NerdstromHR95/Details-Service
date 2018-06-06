const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/clothing');

const itemSchema = mongoose.Schema({
  star: String,
  title: String,
  brand: String,
  price: String,
  description: String,
});

const Item = mongoose.model('Item', itemSchema);

const colorSchema = mongoose.Schema({
  color: String,
});

const Color = mongoose.model('Color', colorSchema);

const sizeSchema = mongoose.Schema({
  size: String,
});

const Size = mongoose.model('Size', sizeSchema);

const fillDatabase = function() {
  Item.create({
    star: '80', title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'Burberry\'s signature checks peek from the two-button placket of a handsome polo cut from soft, piqué-knit cotton.',
  });
  Item.create({
    star: '90', title: 'Oxford Polo', brand: 'BURBERRY', price: '$170.00', description: 'Instantly recognizable, woven checks peeking out the placket brand a cotton piqué polo in a choice of vibrant hues.',
  });
  Item.create({
    star: '70', title: 'Bedford Polo', brand: 'VERSACE', price: '$145.00', description: 'Bold floral-print trim accents the placket of a classic prep polo patrolled in style with regal knight embroidery.',
  });
  Item.create({
    star: '90', title: 'Trim Fit Polo', brand: 'VERSACE', price: '$125.00', description: 'A slim-fitting polo made from soft, lustrous cotton jersey is branded with Versace\'s signature Medusa patch at the chest.',
  });
  Item.create({
    star: '100', title: 'Jersey Polo', brand: 'VERSACE', price: '$195.00', description: 'A polo with an emblem',
  });
  Item.create({
    star: '80', title: 'Haystack Sport Shirt', brand: 'ROBERT GRAHAM', price: '$112.00', description: 'A cotton shirt',
  });
  Item.create({
    star: '90', title: 'Classic Sport Shirt', brand: 'ROBERT GRAHAM', price: '$120.00', description: 'A regular shirt',
  });
  Item.create({
    star: '70', title: 'Hillpunch Shirt', brand: 'ROBERT GRAHAM', price: '$110.00', description: 'An awesome shirt',
  });
  Item.create({
    star: '100', title: 'Traditional Dress Shirt', brand: 'NORDSTROM', price: '$40.00', description: 'A plain dress shirt',
  });
  Item.create({
    star: '80', title: 'Pinpoint Dress Shirt', brand: 'NORDSTROM', price: '$40.00', description: 'A well-fitted dress shirt',
  });
  Item.create({
    star: '80', title: 'Weekday Warriors Cotton Pants', brand: 'BONOBOS', price: '$70.00', description: 'Lightweight wrinkle-resistant cotton pants',
  });
  Item.create({
    star: '70', title: 'Straight Leg Stretch Washed Chinos', brand: 'BONOBOS', price: '$60.00', description: 'Stretchy cotton pants',
  });
  Item.create({
    star: '90', title: 'Cropped Twill Trousers', brand: 'TOPMAN', price: '$42.00', description: 'Skinny fit sporty trousers',
  });
  Item.create({
    star: '90', title: 'Flat Front Wool Pants', brand: 'NORDSTROM', price: '$70.00', description: 'Excellent dress pants',
  });
  Item.create({
    star: '70', title: 'Banded Track Pants', brand: 'KAPPA', price: '$100.00', description: 'Terrific track pants',
  });
  Item.create({
    star: '100', title: 'Flat Front Cotton Pants', brand: 'BRAX', price: '$118.00', description: 'An expensive pair of pants',
  });
  Item.create({
    star: '100', title: 'Skinny Fit Trousers', brand: 'TOPMAN', price: '$100.00', description: 'Great looking skinny pants',
  });
  Item.create({
    star: '80', title: 'Jordan Dry 23 Alpha Pants', brand: 'NIKE', price: '$25.00', description: 'Workout pants with Jordan symbol',
  });
  Item.create({
    star: '90', title: 'Crop Smart Joggers', brand: 'TOPMAN', price: '$70.00', description: 'Very expensive jogging pants',
  });
  Item.create({
    star: '90', title: 'Cotton Cargo Pants', brand: 'JOHN VARVATOS', price: '$120.00', description: 'Pants with a lot of pockets',
  });
  Item.create({
    star: '80', title: 'Henley Sweater', brand: 'BONOBOS', price: '$48.00', description: 'A sweater with buttons',
  });
  Item.create({
    star: '70', title: 'V-Neck Sweater', brand: 'NORDSTROM', price: '$35.00', description: 'A cotton and cashmere sweater',
  });
  Item.create({
    star: '90', title: 'Cashmere V-Neck Sweater', brand: 'JOHN NORDSTROM', price: '$170.00', description: 'A very expensive sweater',
  });
  Item.create({
    star: '100', title: 'Crewneck Sweater', brand: 'GIVENCHY', price: '$960.00', description: 'An absurdly expensive sweater',
  });
  Item.create({
    star: '100', title: 'Slim Fit Cardigan', brand: 'TOPMAN', price: '$65.00', description: 'A 5-button cotton cardigan',
  });
  Item.create({
    star: '80', title: 'Quarter-zip Pullover', brand: 'PETER MILLAR', price: '$145.00', description: 'A sweater with a short zipper',
  });
  Item.create({
    star: '80', title: 'Wool Crewneck Sweater', brand: 'BURBERRY', price: '$240.00', description: 'A greal looking sweater',
  });
  Item.create({
    star: '80', title: 'Linen Blend Henley', brand: 'NORDSTROM', price: '$35.00', description: 'A 3-button sweater',
  });
  Item.create({
    star: '90', title: 'Bugs Bunny Wool Sweater', brand: 'GUCCI', price: '$1450.00', description: 'Literally just a bugs bunny sweater',
  });
  Item.create({
    star: '90', title: 'Nalon Wool Sweater', brand: 'ACNE STUDIOS', price: '$300.00', description: 'A tight wool sweater',
  });
  Item.create({
    star: '70', title: 'Slim Straight Leg Jeans', brand: 'EVERETT', price: '$144.00', description: 'Blue faded jeans',
  });
  Item.create({
    star: '100', title: 'Slim Straight Leg Jeans', brand: 'WRANGLER', price: '$139.00', description: 'Dark plain jeans',
  });
  Item.create({
    star: '100', title: 'Slim Straight Leg Jeans', brand: 'GRADUATE', price: '$175.00', description: 'Acid washed jeans',
  });
  Item.create({
    star: '80', title: 'Slim Straight Leg Jeans', brand: 'LEVI\'S', price: '$47.00', description: 'Some cheap jeans',
  });
  Item.create({
    star: '80', title: 'Slim Straight Leg Jeans', brand: 'RAG & BONE', price: '$150.00', description: 'Country style jeans',
  });
  Item.create({
    star: '90', title: 'Ripped Stretch Skinny Jeans', brand: 'TOPMAN', price: '$85.00', description: 'Skinny ripped up faded jeans',
  });
  Item.create({
    star: '90', title: 'Ripped Spray On Skinny Jeans', brand: 'TOPMAN', price: '$50.00', description: 'Dark skinny jeans with holes',
  });
  Item.create({
    star: '100', title: 'Blinder Biker Skinny Jeans', brand: 'HUDSON', price: '$170.00', description: 'Dark skinny jeans with no holes',
  });
  Item.create({
    star: '100', title: 'Blinder Skinny Moto Jeans', brand: 'HUDSON', price: '$183.00', description: 'Light colored faded jeans',
  });
  Item.create({
    star: '100', title: 'Frankie Super Skinny Jeans', brand: 'TOPMAN', price: '$55.00', description: 'Really really skinny jeans',
  });
  Item.create({
    star: '90', title: 'Stretch Breaker Shorts', brand: 'VINEYARD VINES', price: '$51.00', description: 'Pretty short shorts',
  });
  Item.create({
    star: '80', title: 'Chino Shorts', brand: 'AG GRIFFIN', price: '$94.00', description: 'Awesome shorts',
  });
  Item.create({
    star: '80', title: 'Dry Out Chino Shorts', brand: 'HURLEY', price: '$35.00', description: 'Terrific shorts',
  });
  Item.create({
    star: '70', title: 'Edgewood Cargo Shorts', brand: 'TOMMY BAHAMA', price: '$60.00', description: 'Shorts with pockets',
  });
  Item.create({
    star: '90', title: 'Slim Fit Chino Shorts', brand: '1901 BALLARD', price: '$36.00', description: 'A regular pair of shorts',
  });
  Item.create({
    star: '80', title: 'Performance Breaker Shorts', brand: 'VINEYARD VINES', price: '$57.00', description: 'Cool shorts',
  });
  Item.create({
    star: '80', title: 'Seersucker Shorts', brand: 'PETER MILLAR', price: '$57.00', description: 'Great shorts',
  });
  Item.create({
    star: '80', title: 'Twill Shorts', brand: 'VANS', price: '$30.00', description: 'Cheap shorts',
  });
  Item.create({
    star: '90', title: 'Flex Distance Shorts', brand: 'NIKE', price: '$23.00', description: 'Exercise shorts',
  });
  Item.create({
    star: '90', title: 'Skinny Fit Chino Shorts', brand: 'TOPMAN', price: '$40.00', description: 'More like underwear than shorts',
  });
  Item.create({
    star: '100', title: 'Chambray Midi Dress', brand: 'FREE PEOPLE', price: '$98.00', description: 'A dress with frilly shoulders',
  });
  Item.create({
    star: '90', title: 'Cotton Shirtdress', brand: 'CHELSEA 28', price: '$120.00', description: 'A dress with buttons',
  });
  Item.create({
    star: '100', title: 'Halter Maxi Dress', brand: 'ELISA J', price: '$188.00', description: 'A dress with a bow',
  });
  Item.create({
    star: '70', title: 'Off the Shoulder Dress', brand: 'CHARLES HENRY', price: '$53.00', description: 'A dress with exposed shoulders',
  });
  Item.create({
    star: '70', title: 'Body-con Tank Dress', brand: 'LEITH', price: '$56.00', description: 'A dress with tanktop shoulders',
  });
  Item.create({
    star: '70', title: 'Posie Maxi Dress', brand: 'WAYF', price: '$79.00', description: 'A dress with shoestrings',
  });
  Item.create({
    star: '80', title: 'Lace Maxi Dress', brand: 'ASTR', price: '$89.00', description: 'A dress made of lace',
  });
  Item.create({
    star: '100', title: 'Stretch Crepe Dress', brand: 'BOBEAU', price: '$40.00', description: 'A dress with a robe tie',
  });
  Item.create({
    star: '80', title: 'Scoop Back Minidress', brand: 'TOPSHOP', price: '$14.00', description: 'A short dress',
  });
  Item.create({
    star: '80', title: 'Racerback Shift Dress', brand: 'LEITH', price: '$30.00', description: 'A small see-through dress',
  });
  Item.create({
    star: '90', title: 'Pleat Skirt', brand: 'GIBSON', price: '$59.00', description: 'A loose fitting skirt',
  });
  Item.create({
    star: '80', title: 'Pencil Skirt', brand: 'GIBSON', price: '$52.00', description: 'A tight fitting skirt',
  });
  Item.create({
    star: '100', title: 'Easy Skirt', brand: 'GIBSON', price: '$50.00', description: 'A terrific skirt',
  });
  Item.create({
    star: '90', title: 'French Terry Skirt', brand: 'GIBSON', price: '$22.00', description: 'A skirt made of sweatpants',
  });
  Item.create({
    star: '80', title: 'Side Slit Maxi Skirt', brand: 'BOBEAU', price: '$29.00', description: 'A long skirt with a slit',
  });
  Item.create({
    star: '80', title: 'Inset Maxi Skirt', brand: 'BP', price: '$35.00', description: 'A skirt with buttons and a slit',
  });
  Item.create({
    star: '80', title: 'Ruffle Skirt', brand: 'J. CREW', price: '$58.00', description: 'A skirt with ruffles',
  });
  Item.create({
    star: '100', title: 'Denim Skirt', brand: 'J. CREW', price: '$52.00', description: 'A skirt made of jeans',
  });
  Item.create({
    star: '90', title: 'Wrap Style Skirt', brand: '1. STATE', price: '$69.00', description: 'A toga looking skirt',
  });
  Item.create({
    star: '80', title: 'Faux Wrap Skirt', brand: 'BP', price: '$36.00', description: 'A skirt with a bow',
  });
  Item.create({
    star: '80', title: 'Ruffle Blouse', brand: 'ALICE + OLIVIA', price: '$275.00', description: 'An expensive pirate shirt',
  });
  Item.create({
    star: '100', title: 'Stretch Jersey Top', brand: 'LEWIT', price: '$199.00', description: 'A shirt with one shoulder',
  });
  Item.create({
    star: '100', title: 'Tie Back Top', brand: 'BP', price: '$49.00', description: 'A shirt with a tie in the back',
  });
  Item.create({
    star: '80', title: 'Side Slit Tee', brand: 'RAW EDGE', price: '$60.00', description: 'A shirt with a slit in the side',
  });
  Item.create({
    star: '80', title: 'Ruffled Tank', brand: 'GIBSON', price: '$39.00', description: 'A shirt with ruffles',
  });
  Item.create({
    star: '90', title: 'Halter Top', brand: 'GIBSON', price: '$49.00', description: 'A shirt with, like, a neck loop',
  });
  Item.create({
    star: '90', title: 'Tab Sleeve Tunic', brand: 'PERFECT ROLL', price: '$28.00', description: 'A long sleeve shirt',
  });
  Item.create({
    star: '80', title: 'Twist Front Tee', brand: 'BP', price: '$14.00', description: 'A bunched up shirt',
  });
  Item.create({
    star: '70', title: 'Strappy Camisole', brand: 'WAYF', price: '$55.00', description: 'A shirt with a shoelace thing in the front',
  });
  Item.create({
    star: '100', title: 'Eyelet Sleeve Top', brand: 'BOBEAU', price: '$45.00', description: 'A shirt with lace sleeves',
  });
  Item.create({
    star: '80', title: 'Long Silk Jacket', brand: 'EILEEN FISHER', price: '$400.00', description: 'An expensive jacket',
  });
  Item.create({
    star: '80', title: 'Linen Blend Blazer', brand: 'NORDSTROM', price: '$299.00', description: 'A business jacket',
  });
  Item.create({
    star: '70', title: 'Crop Leather Moto Jacket', brand: 'NORDSTROM', price: '$699.00', description: 'An really expensive jacket',
  });
  Item.create({
    star: '70', title: 'Tie Neck Denim Jacket', brand: 'FRAME', price: '$329.00', description: 'A jean jacket with a bow tie',
  });
  Item.create({
    star: '100', title: 'Cinch Sleeve Blazer', brand: 'BP', price: '$39.00', description: 'A long business jacket',
  });
  Item.create({
    star: '90', title: 'Hooded Raincoat', brand: 'COLE HAAN', price: '$129.00', description: 'A durable raincoat',
  });
  Item.create({
    star: '100', title: 'Knit Blazer', brand: 'CASLON', price: '$36.00', description: 'A one-button jacket',
  });
  Item.create({
    star: '70', title: 'Double-Breasted Jacket', brand: 'LEITH', price: '$45.00', description: 'A manly jacket',
  });
  Item.create({
    star: '80', title: 'Easy Blazer', brand: 'HINGE', price: '$79.00', description: 'A casual blazer',
  });
  Item.create({
    star: '80', title: 'Utility Jacket', brand: 'CASLON', price: '$42.00', description: 'A jacket with pockets',
  });
  Item.create({
    star: '90', title: 'Linen Cardigan', brand: 'EILEEN FISHER', price: '$124.00', description: 'A fishnet sweater',
  });
  Item.create({
    star: '90', title: 'Cotton Sweater', brand: 'A.L.C NICK', price: '$395.00', description: 'A really deep v-neck sweater',
  });
  Item.create({
    star: '90', title: 'Linen Blend Sweater', brand: 'NORDSTROM', price: '$199.00', description: 'A see-through sweater',
  });
  Item.create({
    star: '70', title: 'Wool Sweater', brand: 'BOSS FARROW', price: '$215.00', description: 'A tight sweater',
  });
  Item.create({
    star: '90', title: 'Tie Sleeve Cardigan', brand: 'HALOGEN', price: '$42.00', description: 'A cheap sweater',
  });
  Item.create({
    star: '100', title: 'Linen Blend Cardigan', brand: 'HALOGEN', price: '$68.00', description: 'A long cardigan',
  });
  Item.create({
    star: '80', title: 'Cotton Tie Sweater', brand: 'HALOGEN', price: '$30.00', description: 'A tied up sweater',
  });
  Item.create({
    star: '80', title: 'Crop Sweatshirt', brand: 'TOPSHOP', price: '$19.00', description: 'A really short sweatshirt',
  });
  Item.create({
    star: '80', title: 'Drape Collar Cardigan', brand: 'CASLON', price: '$36.00', description: 'A loose cardigan',
  });
  Item.create({
    star: '80', title: 'Three Quarter Sleeve Cardigan', brand: 'HALOGEN', price: '$46.00', description: 'A cardigan with sleeves',
  });
  Color.create({ color: 'white' });
  Color.create({ color: 'black' });
  Color.create({ color: 'blue' });
  Color.create({ color: 'red' });
  Color.create({ color: 'green' });
  Size.create({ size: 's' });
  Size.create({ size: 'm' });
  Size.create({ size: 'l' });
}

const getFirstItem = function(callback) {
  Item.aggregate([{$sample: {size: 1}}]).exec((err, results) => {
    if (err) {
      console.log('ERROR:', err);
    }
    console.log('Found in the DB:', results);
    callback(results);
  });
};

const getAllItems = function (callback) {
  Item.find().exec((err, results) => {
    if (err) {
      console.log('Item query error', err);
    }
    callback(results);
  });
};


const getAllColors = function (callback) {
  Color.find().exec((err, results) => {
    if (err) {
      console.log('Color query error', err);
    }
    callback(results);
  });
};


const getAllSizes = function (callback) {
  Size.find().exec((err, results) => {
    if (err) {
      console.log('Size query error', err);
    }
    callback(results);
  });
};

module.exports.getFirstItem = getFirstItem;
module.exports.getAllItems = getAllItems;
module.exports.getAllColors = getAllColors;
module.exports.getAllSizes = getAllSizes;
module.exports.fillDatabase = fillDatabase;
