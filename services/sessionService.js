const  mongoose = require('mongoose')
const Token = require('../models/token');

//create new user session
exports.createSession = async function createSession(tokenId, jwtToken) {

        const token = await Token.findOne({ _id: tokenId });
        token.jwtToken = jwtToken;
        await token.save();
        console.log(tokenId,jwtToken)

}

exports.deleteSession = async function deleteSession(userId) {
 return Token.findOneAndDelete({userId})
}
