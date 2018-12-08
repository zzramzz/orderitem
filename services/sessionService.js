const  mongoose = require('mongoose')
const Token = require('../models/token');

//create new user session
module.exports = async function createSession(tokenId, jwtToken) {

        const token = await Token.findOne({ _id: tokenId });
        token.jwtToken = jwtToken;
        await token.save();
        console.log(tokenId,jwtToken)

}



async function deleteSession(refreshToken) {
    const result = await userSession.deleteOne({ refreshToken: refreshToken })
    console.log("inside deleteSession");
    console.log(result);
}
exports.deleteSession = deleteSession;

//get session by refreshToken

async function getSessionByRefreshToken(refreshToken) {
    const session = await userSession.find({ refreshToken })
    if (!session) {
        res.send("session not maintained for given token")
    }
    return session;
}
exports.getSessionByRefreshToken = getSessionByRefreshToken