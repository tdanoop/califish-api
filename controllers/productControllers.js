import mongoose from 'mongoose';
import productSchema from '../models/productModels';

const Product = mongoose.model('Product', productSchema);

export const addProduct = (req, res) => {
    console.log('req.body :',req.body);
    let newProduct = new Product(req.body);
    newProduct.save((err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
};

export const getProduct = (req, res) => {
    Product.find({}, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
}



export const getProductByID = (req, res) => {
    console.log('req.params.productId', req.params.productId);
    Product.findById(req.params.productId, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
}

export const updateProductByID = (req, res) => {
    console.log('req.params.productId', req.params.productId);
    Product.findOneAndUpdate({ _id: req.params.productId }, req.body, { new: true, useFindAndModify: false }, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
}

export const deleteProductByID = (req, res) => {
    Product.remove({ _id: req.params.productId }, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send({ message: 'Product Succesfully Deleted' });
    })
}

