const Token  = require('../models/token');
const User = require('../models/user_model');
const Food = require('../models/food');
const Order = require('../models/order_model');


//Token services
exports.findToken =  function findToken(userId) {
    return Token.findOne({ userId })
}

exports.saveNewToken =  function saveNewToken(token,userId) {
    const t=  new Token({ token, userId })
    return t.save();
}
 



//Users services
exports.saveNewUser = function saveNewUser(name,phone,isAdmin){
    const user = new User({name,phone,isAdmin})
    return user.save();
}

exports.findUser =  function findUser(phone){
   return User.findOne({ phone})
    // if (!user) return res.status(404).send('User not found');
    // if(!user){throw new Error('User not Found')}
    return user
}
exports.findAllUser =  function findAllUser(phone){
    return User.find()
}


//food service

exports.addFood = function addFood(newFood){
    const food = new Food(newFood);
    return food.save();
}
exports.findAllFood = function findAllFood(){
    return Food.find();
}
exports.findFood = function findFood(_id){
    return Food.findOne({_id});
}
exports.deleteFood = function deleteFood(_id){
    return Food.findOneAndDelete({_id});
}
exports.modifyFood = function modifyFood(_id,title,category){
    return Food.findOneAndUpdate({_id},{title,category},{new:true});
}


// exports.addVeg = function addveg(title){
//     const veg = new Veg({title});
//     return veg.save();
// }

// exports.addNonVeg = function addNonVeg(title){
//     const nonVeg = new NonVeg({title});
//     return nonVeg.save();
// }

// exports.findAllVeg = function findAllVeg(){
//     return Veg.find();
// }
// exports.findAllNonVeg = function findAllNonVeg(){
//     return NonVeg.find();
// }


//order Services
exports.addOrder = function addOrder(food,foodId,category,orderedBy){
    const order = new Order({food,foodId,category,orderedBy})
    return order.save();
}
exports.viewOrder = function viewOrder(){
    return Order.find();
}
exports.modifyOrder = function modifyOrder(orderedBy,food,foodId,category){
     return Order.findOneAndUpdate({orderedBy},{food,foodId,category},{new:true});
}
exports.deleteOrder = function deleteOrder(orderedBy){
    return Order.findOneAndDelete({orderedBy});
}
exports.myOrder = function myOrder(orderedBy){
    return Order.findOne({orderedBy});
}