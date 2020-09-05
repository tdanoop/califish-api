import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({

    productName: {
        required: [true, 'Product Name is Required'],
        type: String,
        minLength: 3,
        maxLength: 25,
        unique: [true, 'Product Name already exists']
    },
    localName: {
        required: [true, 'Product Name is Required'],
        type: String,
        minLength: 3,
        maxLength: 25,
        unique: [true, 'Product Name already exists']
    },
    description: {
        type: String,
        required: false,
        maxlength: 500,
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    thumbImage: {
        type: String,
        required: [true, 'Product Thumb Image is Required'],
        default: null
    },
    imageList: {
        type: Array,
        default: []
    },
    backGroundColor: {
        type: String,
        required: [true, 'Background color is required'],
        default: null
    },
    stock: {
        type: Number,
        required: [true, 'Stock is required'],
        default: 0
    },
    fishPrice: {
        type: Number,
        required: [true, 'Orginal Price is required'],
        default: 0
    },
    originalPrice: {
        type: Number,
        required: [true, 'Orginal Price is required'],
        default: 0
    },
    sellingPrice: {
        type: Number,
        required: [true, 'Selling Price is required'],
        default: 0
    },
    Keywords: {
        type: Array,
        default: []
    },
    disountPercentage: {
        type: Number,
        default: 0
    },
    cutStylePrice: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default userSchema;