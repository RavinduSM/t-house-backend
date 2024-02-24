import User from '../models/userModel.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import createToken from '../utils/createToken.js'

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save()
        res.status(201).json('User Created successfully')
    } catch (error) {
        next(error);
    }
}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        const isPasswordValid = await bcryptjs.compare(
            password,
            existingUser.password
        );

        if (isPasswordValid) {
            createToken(res, existingUser._id);

            res.status(201).json({
                _id: existingUser._id,
                username: existingUser.username,
                email: existingUser.email,
                isAdmin: existingUser.isAdmin,
            });
        } else {
            res.status(401).json({ message: "Invalid Password" });
        }
    } else {
        res.status(401).json({ message: "User not found" });
    }

}
