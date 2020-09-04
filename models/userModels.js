import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({

    location: {
        type: String
    },
    pincode: {
        unique: true,
        type: Number
    },
    phoneNumber: {
        unique: true,
        type: Number,
        minLength:10
    },
    userVerified: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default userSchema;