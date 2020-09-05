import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({

    categoryName: {
        required: [true, 'Category Name is Required'],
        type: String,
        minLength: 4,
        maxLength: 12,
        unique: [true, 'Category Name already exists']
    },
    description: {
        type: String,
        required: false,
        maxlength: 500,
    },
    categoryImage: {
        type: String,
        required: [true, 'Category Image is Required'],
        default: null
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default userSchema;