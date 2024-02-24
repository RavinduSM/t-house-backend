import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    name: { type: String, required: true, },
    email: { type: String, required: true, },
    subject: { type: String, required: true },
    message: { type: String, required: true },
},
    {
        timeStamps: true
    });



const Message = mongoose.model('Message', messageSchema);
export default Message;