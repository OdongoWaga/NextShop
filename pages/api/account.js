import User from '../../models/User'
import jwt from 'jsonwebtoken'
import connectDb from '../../utils/connectDb'

connectDb()

export default async (req, res) => {
    switch(req.method) {
        case "GET":
            await handleGetRequest(req, res);
            break;
        case "PUT":
            await handlePutRequest(req, res)
            break
        default:
            res.status(405).send(`Method ${req.method} not allowed`)
            break
    }
}

async function handleGetRequest (req, res) {
    if(!("authorization" in req.headers)) {
        return res.status(401). send("No Authorization token")
    }

    try{
        const {userId} = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        const user = await User.findOne({_id: userId})
        if(user) {
            res.status(200).json(user)
        } else {
            res.status(404).send("User not found")
        }
    } catch (error) {
        res.status(403).send("Invalid Token")
    }
}

async function handlePutRequest (req, res) {
    const{_id, role} = req.body
    await User.findByIdAndUpdate(
        {_id},
        {role}
    )
    res.status(203).send('User updated')
}