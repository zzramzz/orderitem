const router = require('express').Router();
const phoneValidator = require('../validators/phoneValidator');
const generateTokens = require('../utils/jwt');
const genToken = require('../utils/generateToken');
const smsService = require('../utils/twilio')
const { createSession } = require('../services/sessionService');
const { findUser, findToken, saveNewToken } = require('../services/dbServices');


// const asyncMiddleware = require('../middlewares/async');

//send token to user via sms
router.post('/', phoneValidator, async (req, res) => {
    const user = await findUser(req.body.phone)
    if (!user) return res.status(404).send('User not found');

    const smstoken = genToken();
    userId = user._id;

    const a = await smsService(user.name, smstoken, user.phone)
    if (a.status == 400) return res.status(a.status).send('phone no. not verified')

    const t = await findToken(userId)

    if (!t) {
        await saveNewToken(smstoken, userId);
        res.send('token sent');
    } else {
        t.token = smstoken
        await t.save();
        res.send('tokennnnn sent')
    }

})

//phone and token
router.post('/token', async (req, res) => {

    const user = await findUser(req.body.phone)
    if (!user) return res.status(404).send('User not found');

    const tokenUser = await findToken(user._id)
    if (!tokenUser) return res.status(404).send('no token found')
    console.log(tokenUser)

    if (tokenUser.token !== req.body.token) return res.send('Token donot match');

    const jwtToken = generateTokens(user._id, user.isAdmin);

    const session = createSession(tokenUser._id, jwtToken);
    if (session.ex) return res.status(500).send('token save error')

    res.header('x-auth-token', jwtToken).send(user)
})


module.exports = router;
