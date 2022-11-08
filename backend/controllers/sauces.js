const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  userId: String,
  name: String,
  manufacturer: String,
  description: String,
  mainPepper: String,
  imageUrl: String,
  heat: Number,
  likes: Number,
  dislikes: Number,
  usersLiked: [String],
  usersDisliked: [String],
});
const Product = mongoose.model('Product', productSchema);

function getSauces(req, res) {
    //console.log('token valid', decoded);
    Product.find({}).then((products) => res.send({ products }));
    // res.send({ message: ['sauce: sauce1', 'sauce: sauce2'] });
}

function createSauce(req, res) {
    const sauce = JSON.parse(req.body.sauce)
    
    const {name, manufacturer, description, mainPepper, heat, userId} = sauce
    console.log("sauce", sauce)
    
    console.log({body: req.body.sauce})

  const product = new Product({
    userId: "bou",
    name: "bou",
    manufacturer: "bou",
    description: "bou",
    mainPepper: "bou",
    imageUrl: "bou",
    heat: 2,
    likes: 2,
    dislikes: 2,
    usersLiked: ["bou"],
    usersDisliked: ["bou"],
  });
  product
    .save()
    .then((res) => console.log('registered product', res))
    .catch(console.error);
}

module.exports = { getSauces, createSauce };
