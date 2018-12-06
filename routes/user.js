const router = require('express').Router();
const User = require('../models/user_model');
const validateUser = require('../validators/userValidator')

router.get('/', async (req, res) => {
    const result = await User.find();
    res.send(result);
})

router.post('/', validateUser, async(req, res) => {
    const { name, phone } = req.body;
    const user = new User({
        name,phone
    })
    const result = await user.save();
    res.send(result);
})

router.put('/',async(req,res)=>{
    
})

module.exports = router;