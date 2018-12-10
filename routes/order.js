const router = require('express').Router();
const { addOrder, viewOrder, modifyOrder, deleteOrder, myOrder, findFood } = require('../services/dbServices');
const auth = require('../middlewares/auth');
const Admin = require('../middlewares/admin');

router.get('/', auth, Admin, async (req, res) => {
    const result = await viewOrder();
    if (result == '') return res.send('nobody ordered yet');
    res.send(result)
})

router.get('/myorder', auth, async (req, res) => {
    const result = await myOrder(req.user._id);
    if (!result) return res.send('you have not ordered yet');
    res.send(result);
})

router.post('/', auth, async (req, res) => {
    const { foodId } = req.body;
    const { _id } = req.user;

    const myorder = await myOrder(_id)
    if (myorder) return res.send('You have already ordered')

    const food = await findFood(foodId);
    if (!food) return res.send('this food is not on the list');

    const result = await addOrder(food.title, food._id, food.category, _id);
    res.send(result);
})

router.put('/modify', auth, async (req, res) => {
    const { foodId } = req.body;
    const { _id } = req.user;

    const food = await findFood(foodId);
    if (!food) return res.send('this food is not on the list');

    const result = await modifyOrder(_id, food.title, food._id, food.category,);
    res.send(result);
})

router.delete('/', auth, async (req, res) => {
    const result = await deleteOrder(req.user._id)
    if(!result) return res.send('order already cancelled')
    res.send(result);
})

module.exports = router

//order blocking after 12 