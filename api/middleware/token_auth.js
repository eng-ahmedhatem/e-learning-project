import jwt from "jsonwebtoken"
const token_auth = (req, res, next) => {
    const token = req.cookies.access_token || req.headers["authorization"];
    if (!token) {
        res.status(404).json({ message: "Invalid token" })
        return
    }
    jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
        if (err) return res.status(404).json({ message: "Invalid to authorization" })
            
        req.user = user
        next()
    })
}
export default token_auth