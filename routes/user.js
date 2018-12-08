const router = require('express').Router();
const User = require('../models/user_model');
const validateUser = require('../validators/userValidator')
const pass = require('../middlewares/pass');
const Admin = require('../middlewares/admin');
const auth = require('../middlewares/auth');

router.get('/', async (req, res) => {
    const result = await User.find();
    res.send(result);
})

// enter user by admin
router.post('/',auth, Admin,validateUser, async(req, res) => {
    const { name, phone } = req.body;

    let user = await User.findOne({ phone : phone})
    if(user) return res.status(400).send("User already inserted.")

     user = new User({
        name,phone
    })
    const result = await user.save();
    res.send(result);
})

//admin registration
router.post('/admin',pass,async (req,res)=>{
    const {name, phone, isAdmin} = req.body;
    let user = await User.findOne({ phone : phone})
    if(user) return res.status(400).send("User already inserted.")
  
    user = new User({
        name,phone ,isAdmin
    })
    const result = await user.save();
    res.send(result);
})

router.put('/',async(req,res)=>{
    
})

module.exports = router;