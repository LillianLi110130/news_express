const jwt = require("jsonwebtoken")

const secretKey = process.env.SECRET_KEY;

function verifyToken(req, res, next){
    const token = req.header('Authorization');

    if(!token){
        return res.status(403).json({message: "未登录！"});
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(403).json({message: "登录过期，请重新登录"});
    }
}

module.exports = verifyToken;