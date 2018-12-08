const router = require('express').Router();
const phoneValidator = require('../validators/phoneValidator');
const User = require('../models/user_model');
const Token = require('../models/token');
const generateTokens = require('../utils/jwt');
const genToken = require('../utils/generateToken');
const smsService = require('../utils/twilio')
const createSession = require('../services/sessionService');

// const asyncMiddleware = require('../middlewares/async');

//send token to user via sms
router.post('/', phoneValidator,async (req, res) => {
    const user = await User.findOne({ phone: req.body.phone })
    if (!user) return res.status(404).send('User not found');
    

    const smstoken = genToken();
    userId = user._id;

    ///important problem
     const err= await smsService(user.name, smstoken, user.phone)
    if(err.status ==100) return res.status(err.status).send('message send error')
    const t = await Token.findOne({userId})
    if(!t) {

    const token = new Token({ token: smstoken, userId })
    const result = await token.save();
    res.send(result);
    }else{
        t.token = smstoken
        await t.save();
        res.send('tokennnnn sent')
    }

})

//phone and token
router.post('/token', async (req, res) => {

    const user = await User.findOne({ phone: req.body.phone });
    if (!user) return res.status(404).send('user not found')
    
    const tokenUser = await Token.findOne({ userId: user._id })
    if (!tokenUser) return res.status(404).send('no token found')
    console.log(tokenUser)
    

    if (tokenUser.token !== req.body.token) return res.send('Token donot match');

    const jwtToken = generateTokens(user._id);

    const session = createSession(tokenUser._id, jwtToken);
    if (session.ex) return res.status(500).send('token save error')

    res.header('x-auth-token', jwtToken).send(user)

})

module.exports = router;
