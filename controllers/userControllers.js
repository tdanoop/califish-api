import mongoose from 'mongoose';
import userSchema from '../models/userModels';

const User = mongoose.model('user', userSchema);

export const addNewUser = (req, res) => {
    let newUser = new User(req.body);
    newUser.save((err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
};

export const getUser = (req, res) => {
    User.find({}, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
}

export const getUserByID = (req, res) => {
    console.log('req.params.userId', req.params.userId);
    User.findById(req.params.userId, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
}

export const updateUserByID = (req, res) => {
    console.log('req.params.userId', req.params.userId);
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true, useFindAndModify: false },(err, response) => {
    if (err) {
        res.send(err);
    }
    res.send(response);
})
} 

export const deleteUserByID = (req, res) => {
    User.remove({ _id: req.params.userId },(err, response) => {
    if (err) {
        res.send(err);
    }
    res.send({message:'Succesfully Deleted'});
})
}

