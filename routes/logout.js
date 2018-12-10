const router = require('express').Router();
const auth = require('../middlewares/auth');
const { deleteSession } = require('../services/sessionService');

router.post('/', auth, async (req, res) => {
   const result = await deleteSession(req.user._id)
    if(!result) return res.json({ message: 'You Already Logged Out.' })
    res.json({ message: 'Logged Out Successfully.' })
})
module.exports = router;
