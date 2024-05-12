import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

    UserName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },  
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'
    },
},{timestamps:true})

const User = mongoose.model('User', UserSchema);
export default User;
