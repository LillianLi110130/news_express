const jwt = require("jsonwebtoken")

const secretKey = "110130";

function verifyToken(req, res, next){
    const token = req.header('Authorization');

    if(!token){
        return res.status(401).json({message: "未登录！"});
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        console.log(decoded);
        next();
    }catch(error){
        return res.status(401).json({message: "令牌无效"});
    }
}

module.exports = verifyToken;