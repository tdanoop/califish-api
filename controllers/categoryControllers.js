import mongoose from 'mongoose';
import categorySchema from '../models/categoryModels';

const Category = mongoose.model('Category', categorySchema);

export const addCategory = (req, res) => {
    let newCategory = new Category(req.body);
    newCategory.save((err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
};

export const getCategory = (req, res) => {
    Category.find({}, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
}

export const getcatgegoryByID = (req, res) => {
    console.log('req.params.catId', req.params.catId);
    Category.findById(req.params.catId, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
}

export const updateCategoryByID = (req, res) => {
    console.log('req.params.catId', req.params.catId);
    Category.findOneAndUpdate({ _id: req.params.catId }, req.body, { new: true, useFindAndModify: false }, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
}

export const deleteCategoryByID = (req, res) => {
    Category.remove({ _id: req.params.catId }, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send({ message: 'Category Succesfully Deleted' });
    })
}

