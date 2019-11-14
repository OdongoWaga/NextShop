import connectDb from '../../utils/connectDb'
import User from '../../models/User'
import Cart from '../../models/Cart'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'


connectDb()

export default async (req, res) => {
    const {name, email, password} = req.body

    try {
        //Validate, email and password
        if(!isLength(name, {min: 3, max: 10})) {
            return res.status(422).send("Name must be 3-10 characters long")
        } else if (!isLength(password, {min: 6})) {
            return res.status(422).send("Password must be at least 6 characters long")
        } else if(!isEmail(email)) {
            return res.status(422).send("Email is not valid")
        }
        //1. Check to see if user exists in the db
        const user = await User.findOne({email})
        if(user) {
            return res.status(422).send(`User already exists with email ${email}`)
        }
        //2. if not hash password
        const hash = await bcrypt.hash(password, 10)
        //3. Create User
        const newUser = await new User({
            name,
            email,
            password: hash
        }).save()
        console.log({newUser})
        // Create Cart for the new user
        await new Cart({ user: newUser._id}).save()

        //4. Create Token for new user
        const token = jwt.sign({userId: newUser._id}, process.env.JWT_SECRET, {expiresIn: "7d"});

        //5. Send Back token

        res.status(201).json(token);
    } catch(error){
        console.error(error)
        res.status(500).send("Error signing up user. Please Try Again")

    }
    
}