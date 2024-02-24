import Message from "../models/messageModel.js";

export const addMessage = async (req, res, next) => {
    // console.log(req.body)
    try {
        const message = new Message({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,

        })
        const createMessage = await message.save()
        res.send({ message: "Message added", message: createMessage });
    } catch (error) {
        next(error);
    }
};