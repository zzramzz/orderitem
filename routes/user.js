const router = require('express').Router();
const User = require('../models/user_model');
const validateUser = require('../validators/userValidator')
const pass = require('../middlewares/pass');
const Admin = require('../middlewares/admin');
const auth = require('../middlewares/auth');
const { findUser, saveNewUser,findAllUser} = require('../services/dbServices');


router.get('/', async (req, res) => {
    const result = await findAllUser();
    res.send(result);
})

// enter user by admin
router.post('/',auth, Admin,validateUser, async(req, res) => {
    const { name, phone } = req.body;

    const user = await findUser(phone)
    if(user) return res.status(400).send("User already inserted.")

    const result= await saveNewUser(name,phone,false)

    res.send(result);
})

//admin registration by me
router.post('/admin',pass,async (req,res)=>{
    const {name, phone, isAdmin} = req.body;

    const user = await findUser(phone)
    if(user) return res.status(400).send("User already inserted.")
  
    const result= await saveNewUser(name,phone,isAdmin);
    res.send(result);
})

router.put('/',async(req,res)=>{
    
})

module.exports = router;