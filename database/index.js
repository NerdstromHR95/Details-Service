const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/clothing');

const itemSchema = mongoose.Schema({
  star: String,
  category: String,
  title: String,
  brand: String,
  price: String,
  description: String,
});

const Item = mongoose.model('Item', itemSchema);

const mensShirtSizeSchema = mongoose.Schema({
  size: [String]
});

const MensShirtSize = mongoose.model('MensShirtSize', mensShirtSizeSchema);

const mensPantsSizeSchema = mongoose.Schema({
  size: [String]
});

const MensPantsSize = mongoose.model('MensPantsSize', mensPantsSizeSchema);

const mensShortsSizeSchema = mongoose.Schema({
  size: [String]
});

const MensShortsSize = mongoose.model('MensShortsSize', mensShortsSizeSchema);

const womensDressSizeSchema = mongoose.Schema({
  size: [String]
});

const WomensDressSize = mongoose.model('WomensDressSize', womensDressSizeSchema);

const womensShirtSizeSchema = mongoose.Schema({
  size: [String]
});

const WomensShirtSize = mongoose.model('WomensShirtSize', womensShirtSizeSchema);

const fillDatabase = function() {
  Item.create({
    star: '80', category: 'mensShirt', title: 'Pique Polo', brand: 'BURBERRY', price: '$175.00', description: 'Burberry\'s signature checks peek from the two-button placket of a handsome polo cut from soft, piqué-knit cotton.',
  });
  Item.create({
    star: '90', category: 'mensShirt', title: 'Oxford Polo', brand: 'BURBERRY', price: '$170.00', description: 'Instantly recognizable, woven checks peeking out the placket brand a cotton piqué polo in a choice of vibrant hues.',
  });
  Item.create({
    star: '70', category: 'mensShirt', title: 'Bedford Polo', brand: 'VERSACE', price: '$145.00', description: 'Bold floral-print trim accents the placket of a classic prep polo patrolled in style with regal knight embroidery.',
  });
  Item.create({
    star: '90', category: 'mensShirt', title: 'Trim Fit Polo', brand: 'VERSACE', price: '$125.00', description: 'A slim-fitting polo made from soft, lustrous cotton jersey is branded with Versace\'s signature Medusa patch at the chest.',
  });
  Item.create({
    star: '100', category: 'mensShirt', title: 'Jersey Polo', brand: 'VERSACE', price: '$195.00', description: 'A polo with an emblem',
  });
  Item.create({
    star: '80', category: 'mensShirt', title: 'Haystack Sport Shirt', brand: 'ROBERT GRAHAM', price: '$112.00', description: 'A cotton shirt',
  });
  Item.create({
    star: '90', category: 'mensShirt', title: 'Classic Sport Shirt', brand: 'ROBERT GRAHAM', price: '$120.00', description: 'A regular shirt',
  });
  Item.create({
    star: '70', category: 'mensShirt', title: 'Hillpunch Shirt', brand: 'ROBERT GRAHAM', price: '$110.00', description: 'An awesome shirt',
  });
  Item.create({
    star: '100', category: 'mensShirt', title: 'Traditional Dress Shirt', brand: 'NORDSTROM', price: '$40.00', description: 'A plain dress shirt',
  });
  Item.create({
    star: '80', category: 'mensShirt', title: 'Pinpoint Dress Shirt', brand: 'NORDSTROM', price: '$40.00', description: 'A well-fitted dress shirt',
  });
  Item.create({
    star: '80', category: 'mensPants', title: 'Weekday Warriors Cotton Pants', brand: 'BONOBOS', price: '$70.00', description: 'Lightweight wrinkle-resistant cotton pants',
  });
  Item.create({
    star: '70', category: 'mensPants', title: 'Straight Leg Stretch Washed Chinos', brand: 'BONOBOS', price: '$60.00', description: 'Stretchy cotton pants',
  });
  Item.create({
    star: '90', category: 'mensPants', title: 'Cropped Twill Trousers', brand: 'TOPMAN', price: '$42.00', description: 'Skinny fit sporty trousers',
  });
  Item.create({
    star: '90', category: 'mensPants', title: 'Flat Front Wool Pants', brand: 'NORDSTROM', price: '$70.00', description: 'Excellent dress pants',
  });
  Item.create({
    star: '70', category: 'mensPants', title: 'Banded Track Pants', brand: 'KAPPA', price: '$100.00', description: 'Terrific track pants',
  });
  Item.create({
    star: '100', category: 'mensPants', title: 'Flat Front Cotton Pants', brand: 'BRAX', price: '$118.00', description: 'An expensive pair of pants',
  });
  Item.create({
    star: '100', category: 'mensPants', title: 'Skinny Fit Trousers', brand: 'TOPMAN', price: '$100.00', description: 'Great looking skinny pants',
  });
  Item.create({
    star: '80', category: 'mensPants', title: 'Jordan Dry 23 Alpha Pants', brand: 'NIKE', price: '$25.00', description: 'Workout pants with Jordan symbol',
  });
  Item.create({
    star: '90', category: 'mensPants', title: 'Crop Smart Joggers', brand: 'TOPMAN', price: '$70.00', description: 'Very expensive jogging pants',
  });
  Item.create({
    star: '90', category: 'mensPants', title: 'Cotton Cargo Pants', brand: 'JOHN VARVATOS', price: '$120.00', description: 'Pants with a lot of pockets',
  });
  Item.create({
    star: '80', category: 'mensSweater', title: 'Henley Sweater', brand: 'BONOBOS', price: '$48.00', description: 'A sweater with buttons',
  });
  Item.create({
    star: '70', category: 'mensSweater', title: 'V-Neck Sweater', brand: 'NORDSTROM', price: '$35.00', description: 'A cotton and cashmere sweater',
  });
  Item.create({
    star: '90', category: 'mensSweater', title: 'Cashmere V-Neck Sweater', brand: 'JOHN NORDSTROM', price: '$170.00', description: 'A very expensive sweater',
  });
  Item.create({
    star: '100', category: 'mensSweater', title: 'Crewneck Sweater', brand: 'GIVENCHY', price: '$960.00', description: 'An absurdly expensive sweater',
  });
  Item.create({
    star: '100', category: 'mensSweater', title: 'Slim Fit Cardigan', brand: 'TOPMAN', price: '$65.00', description: 'A 5-button cotton cardigan',
  });
  Item.create({
    star: '80', category: 'mensSweater', title: 'Quarter-zip Pullover', brand: 'PETER MILLAR', price: '$145.00', description: 'A sweater with a short zipper',
  });
  Item.create({
    star: '80', category: 'mensSweater', title: 'Wool Crewneck Sweater', brand: 'BURBERRY', price: '$240.00', description: 'A greal looking sweater',
  });
  Item.create({
    star: '80', category: 'mensSweater', title: 'Linen Blend Henley', brand: 'NORDSTROM', price: '$35.00', description: 'A 3-button sweater',
  });
  Item.create({
    star: '90', category: 'mensSweater', title: 'Bugs Bunny Wool Sweater', brand: 'GUCCI', price: '$1450.00', description: 'Literally just a bugs bunny sweater',
  });
  Item.create({
    star: '90', category: 'mensSweater', title: 'Nalon Wool Sweater', brand: 'ACNE STUDIOS', price: '$300.00', description: 'A tight wool sweater',
  });
  Item.create({
    star: '70', category: 'mensJeans', title: 'Slim Straight Leg Jeans', brand: 'EVERETT', price: '$144.00', description: 'Blue faded jeans',
  });
  Item.create({
    star: '100', category: 'mensJeans', title: 'Slim Straight Leg Jeans', brand: 'WRANGLER', price: '$139.00', description: 'Dark plain jeans',
  });
  Item.create({
    star: '100', category: 'mensJeans', title: 'Slim Straight Leg Jeans', brand: 'GRADUATE', price: '$175.00', description: 'Acid washed jeans',
  });
  Item.create({
    star: '80', category: 'mensJeans', title: 'Slim Straight Leg Jeans', brand: 'LEVI\'S', price: '$47.00', description: 'Some cheap jeans',
  });
  Item.create({
    star: '80', category: 'mensJeans', title: 'Slim Straight Leg Jeans', brand: 'RAG & BONE', price: '$150.00', description: 'Country style jeans',
  });
  Item.create({
    star: '90', category: 'mensJeans', title: 'Ripped Stretch Skinny Jeans', brand: 'TOPMAN', price: '$85.00', description: 'Skinny ripped up faded jeans',
  });
  Item.create({
    star: '90', category: 'mensJeans', title: 'Ripped Spray On Skinny Jeans', brand: 'TOPMAN', price: '$50.00', description: 'Dark skinny jeans with holes',
  });
  Item.create({
    star: '100', category: 'mensJeans', title: 'Blinder Biker Skinny Jeans', brand: 'HUDSON', price: '$170.00', description: 'Dark skinny jeans with no holes',
  });
  Item.create({
    star: '100', category: 'mensJeans', title: 'Blinder Skinny Moto Jeans', brand: 'HUDSON', price: '$183.00', description: 'Light colored faded jeans',
  });
  Item.create({
    star: '100', category: 'mensJeans', title: 'Frankie Super Skinny Jeans', brand: 'TOPMAN', price: '$55.00', description: 'Really really skinny jeans',
  });
  Item.create({
    star: '90', category: 'mensShorts', title: 'Stretch Breaker Shorts', brand: 'VINEYARD VINES', price: '$51.00', description: 'Pretty short shorts',
  });
  Item.create({
    star: '80', category: 'mensShorts', title: 'Chino Shorts', brand: 'AG GRIFFIN', price: '$94.00', description: 'Awesome shorts',
  });
  Item.create({
    star: '80', category: 'mensShorts', title: 'Dry Out Chino Shorts', brand: 'HURLEY', price: '$35.00', description: 'Terrific shorts',
  });
  Item.create({
    star: '70', category: 'mensShorts', title: 'Edgewood Cargo Shorts', brand: 'TOMMY BAHAMA', price: '$60.00', description: 'Shorts with pockets',
  });
  Item.create({
    star: '90', category: 'mensShorts', title: 'Slim Fit Chino Shorts', brand: '1901 BALLARD', price: '$36.00', description: 'A regular pair of shorts',
  });
  Item.create({
    star: '80', category: 'mensShorts', title: 'Performance Breaker Shorts', brand: 'VINEYARD VINES', price: '$57.00', description: 'Cool shorts',
  });
  Item.create({
    star: '80', category: 'mensShorts', title: 'Seersucker Shorts', brand: 'PETER MILLAR', price: '$57.00', description: 'Great shorts',
  });
  Item.create({
    star: '80', category: 'mensShorts', title: 'Twill Shorts', brand: 'VANS', price: '$30.00', description: 'Cheap shorts',
  });
  Item.create({
    star: '90', category: 'mensShorts', title: 'Flex Distance Shorts', brand: 'NIKE', price: '$23.00', description: 'Exercise shorts',
  });
  Item.create({
    star: '90', category: 'mensShorts', title: 'Skinny Fit Chino Shorts', brand: 'TOPMAN', price: '$40.00', description: 'More like underwear than shorts',
  });
  Item.create({
    star: '100', category: 'womensDress', title: 'Chambray Midi Dress', brand: 'FREE PEOPLE', price: '$98.00', description: 'A dress with frilly shoulders',
  });
  Item.create({
    star: '90', category: 'womensDress', title: 'Cotton Shirtdress', brand: 'CHELSEA 28', price: '$120.00', description: 'A dress with buttons',
  });
  Item.create({
    star: '100', category: 'womensDress', title: 'Halter Maxi Dress', brand: 'ELISA J', price: '$188.00', description: 'A dress with a bow',
  });
  Item.create({
    star: '70', category: 'womensDress', title: 'Off the Shoulder Dress', brand: 'CHARLES HENRY', price: '$53.00', description: 'A dress with exposed shoulders',
  });
  Item.create({
    star: '70', category: 'womensDress', title: 'Body-con Tank Dress', brand: 'LEITH', price: '$56.00', description: 'A dress with tanktop shoulders',
  });
  Item.create({
    star: '70', category: 'womensDress', title: 'Posie Maxi Dress', brand: 'WAYF', price: '$79.00', description: 'A dress with shoestrings',
  });
  Item.create({
    star: '80', category: 'womensDress', title: 'Lace Maxi Dress', brand: 'ASTR', price: '$89.00', description: 'A dress made of lace',
  });
  Item.create({
    star: '100', category: 'womensDress', title: 'Stretch Crepe Dress', brand: 'BOBEAU', price: '$40.00', description: 'A dress with a robe tie',
  });
  Item.create({
    star: '80', category: 'womensDress', title: 'Scoop Back Minidress', brand: 'TOPSHOP', price: '$14.00', description: 'A short dress',
  });
  Item.create({
    star: '80', category: 'womensDress', title: 'Racerback Shift Dress', brand: 'LEITH', price: '$30.00', description: 'A small see-through dress',
  });
  Item.create({
    star: '90', category: 'womensSkirt', title: 'Pleat Skirt', brand: 'GIBSON', price: '$59.00', description: 'A loose fitting skirt',
  });
  Item.create({
    star: '80', category: 'womensSkirt', title: 'Pencil Skirt', brand: 'GIBSON', price: '$52.00', description: 'A tight fitting skirt',
  });
  Item.create({
    star: '100', category: 'womensSkirt', title: 'Easy Skirt', brand: 'GIBSON', price: '$50.00', description: 'A terrific skirt',
  });
  Item.create({
    star: '90', category: 'womensSkirt', title: 'French Terry Skirt', brand: 'GIBSON', price: '$22.00', description: 'A skirt made of sweatpants',
  });
  Item.create({
    star: '80', category: 'womensSkirt', title: 'Side Slit Maxi Skirt', brand: 'BOBEAU', price: '$29.00', description: 'A long skirt with a slit',
  });
  Item.create({
    star: '80', category: 'womensSkirt', title: 'Inset Maxi Skirt', brand: 'BP', price: '$35.00', description: 'A skirt with buttons and a slit',
  });
  Item.create({
    star: '80', category: 'womensSkirt', title: 'Ruffle Skirt', brand: 'J. CREW', price: '$58.00', description: 'A skirt with ruffles',
  });
  Item.create({
    star: '100', category: 'womensSkirt', title: 'Denim Skirt', brand: 'J. CREW', price: '$52.00', description: 'A skirt made of jeans',
  });
  Item.create({
    star: '90', category: 'womensSkirt', title: 'Wrap Style Skirt', brand: '1. STATE', price: '$69.00', description: 'A toga looking skirt',
  });
  Item.create({
    star: '80', category: 'womensSkirt', title: 'Faux Wrap Skirt', brand: 'BP', price: '$36.00', description: 'A skirt with a bow',
  });
  Item.create({
    star: '80', category: 'womensShirt', title: 'Ruffle Blouse', brand: 'ALICE + OLIVIA', price: '$275.00', description: 'An expensive pirate shirt',
  });
  Item.create({
    star: '100', category: 'womensShirt', title: 'Stretch Jersey Top', brand: 'LEWIT', price: '$199.00', description: 'A shirt with one shoulder',
  });
  Item.create({
    star: '100', category: 'womensShirt', title: 'Tie Back Top', brand: 'BP', price: '$49.00', description: 'A shirt with a tie in the back',
  });
  Item.create({
    star: '80', category: 'womensShirt', title: 'Side Slit Tee', brand: 'RAW EDGE', price: '$60.00', description: 'A shirt with a slit in the side',
  });
  Item.create({
    star: '80', category: 'womensShirt', title: 'Ruffled Tank', brand: 'GIBSON', price: '$39.00', description: 'A shirt with ruffles',
  });
  Item.create({
    star: '90', category: 'womensShirt', title: 'Halter Top', brand: 'GIBSON', price: '$49.00', description: 'A shirt with, like, a neck loop',
  });
  Item.create({
    star: '90', category: 'womensShirt', title: 'Tab Sleeve Tunic', brand: 'PERFECT ROLL', price: '$28.00', description: 'A long sleeve shirt',
  });
  Item.create({
    star: '80', category: 'womensShirt', title: 'Twist Front Tee', brand: 'BP', price: '$14.00', description: 'A bunched up shirt',
  });
  Item.create({
    star: '70', category: 'womensShirt', title: 'Strappy Camisole', brand: 'WAYF', price: '$55.00', description: 'A shirt with a shoelace thing in the front',
  });
  Item.create({
    star: '100', category: 'womensShirt', title: 'Eyelet Sleeve Top', brand: 'BOBEAU', price: '$45.00', description: 'A shirt with lace sleeves',
  });
  Item.create({
    star: '80', category: 'womensJacket', title: 'Long Silk Jacket', brand: 'EILEEN FISHER', price: '$400.00', description: 'An expensive jacket',
  });
  Item.create({
    star: '80', category: 'womensJacket', title: 'Linen Blend Blazer', brand: 'NORDSTROM', price: '$299.00', description: 'A business jacket',
  });
  Item.create({
    star: '70', category: 'womensJacket', title: 'Crop Leather Moto Jacket', brand: 'NORDSTROM', price: '$699.00', description: 'An really expensive jacket',
  });
  Item.create({
    star: '70', category: 'womensJacket', title: 'Tie Neck Denim Jacket', brand: 'FRAME', price: '$329.00', description: 'A jean jacket with a bow tie',
  });
  Item.create({
    star: '100', category: 'womensJacket', title: 'Cinch Sleeve Blazer', brand: 'BP', price: '$39.00', description: 'A long business jacket',
  });
  Item.create({
    star: '90', category: 'womensJacket', title: 'Hooded Raincoat', brand: 'COLE HAAN', price: '$129.00', description: 'A durable raincoat',
  });
  Item.create({
    star: '100', category: 'womensJacket', title: 'Knit Blazer', brand: 'CASLON', price: '$36.00', description: 'A one-button jacket',
  });
  Item.create({
    star: '70', category: 'womensJacket', title: 'Double-Breasted Jacket', brand: 'LEITH', price: '$45.00', description: 'A manly jacket',
  });
  Item.create({
    star: '80', category: 'womensJacket', title: 'Easy Blazer', brand: 'HINGE', price: '$79.00', description: 'A casual blazer',
  });
  Item.create({
    star: '80', category: 'womensJacket', title: 'Utility Jacket', brand: 'CASLON', price: '$42.00', description: 'A jacket with pockets',
  });
  Item.create({
    star: '90', category: 'womensSweater', title: 'Linen Cardigan', brand: 'EILEEN FISHER', price: '$124.00', description: 'A fishnet sweater',
  });
  Item.create({
    star: '90', category: 'womensSweater', title: 'Cotton Sweater', brand: 'A.L.C NICK', price: '$395.00', description: 'A really deep v-neck sweater',
  });
  Item.create({
    star: '90', category: 'womensSweater', title: 'Linen Blend Sweater', brand: 'NORDSTROM', price: '$199.00', description: 'A see-through sweater',
  });
  Item.create({
    star: '70', category: 'womensSweater', title: 'Wool Sweater', brand: 'BOSS FARROW', price: '$215.00', description: 'A tight sweater',
  });
  Item.create({
    star: '90', category: 'womensSweater', title: 'Tie Sleeve Cardigan', brand: 'HALOGEN', price: '$42.00', description: 'A cheap sweater',
  });
  Item.create({
    star: '100', category: 'womensSweater', title: 'Linen Blend Cardigan', brand: 'HALOGEN', price: '$68.00', description: 'A long cardigan',
  });
  Item.create({
    star: '80', category: 'womensSweater', title: 'Cotton Tie Sweater', brand: 'HALOGEN', price: '$30.00', description: 'A tied up sweater',
  });
  Item.create({
    star: '80', category: 'womensSweater', title: 'Crop Sweatshirt', brand: 'TOPSHOP', price: '$19.00', description: 'A really short sweatshirt',
  });
  Item.create({
    star: '80', category: 'womensSweater', title: 'Drape Collar Cardigan', brand: 'CASLON', price: '$36.00', description: 'A loose cardigan',
  });
  Item.create({
    star: '80', category: 'womensSweater', title: 'Three Quarter Sleeve Cardigan', brand: 'HALOGEN', price: '$46.00', description: 'A cardigan with sleeves',
  });
  MensShirtSize.create({
    size: ['Small', 'Medium', 'Large', 'X-Large', 'XX-Large', 'XXX-Large']
  });
  MensPantsSize.create({
    size: ['28x30', '28x32', '29x30', '29x32', '30x30', '30x32', '30x34', '31x30', '31x32', '31x34', '32x30', '32x32', '32x24', '33x32', '33x34', '34x30', '34x32', '40x32']
  });
  MensShortsSize.create({
    size: ['28', '29', '30', '31', '32', '34', '35', '36', '38']
  });
  WomensDressSize.create({
    size: ['0', '2', '4', '6', '8', '10', '12']
  });
  WomensShirtSize.create({
    size: ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large']
  });
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

const getMensPantsSizes = function (callback) {
  MensPantsSize.find().exec((err, results) => {
    if (err) {
      console.log('ERROR', err);
    }
    callback(results);
  });
}

const getMensShortsSizes = function (callback) {
  MensShortsSize.find().exec((err, results) => {
    if (err) {
      console.log('ERROR', err);
    }
    callback(results);
  });
}

const getMensShirtSizes = function (callback) {
  MensShirtSize.find().exec((err, results) => {
    if (err) {
      console.log('ERROR', err);
    }
    callback(results);
  });
}

const getWomensDressSizes = function (callback) {
  WomensDressSize.find().exec((err, results) => {
    if (err) {
      console.log('ERROR', err);
    }
    callback(results);
  });
}

const getWomensShirtSizes = function (callback) {
  WomensShirtSize.find().exec((err, results) => {
    if (err) {
      console.log('ERROR', err);
    }
    callback(results);
  });
}

module.exports.getFirstItem = getFirstItem;
module.exports.getAllItems = getAllItems;
module.exports.fillDatabase = fillDatabase;
module.exports.getMensShirtSizes = getMensShirtSizes;
module.exports.getMensShortsSizes = getMensShortsSizes;
module.exports.getMensPantsSizes = getMensPantsSizes;
module.exports.getWomensShirtSizes = getWomensShirtSizes;
module.exports.getWomensDressSizes = getWomensDressSizes;

