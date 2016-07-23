/**
 * http://usejsdoc.org/
 */

var mongoose=require('mongoose');

var ProductSchema = mongoose.Schema({
    name: String,
    price:Number,
    description:String
});

//by defaults maps to 'Products' collection' in mongoDB

var Product=mongoose.model('Product', ProductSchema); 

module.exports=Product;