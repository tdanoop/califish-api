import {
    addNewUser,
    getUser,
    getUserByID,
    updateUserByID,
    deleteUserByID
} from '../controllers/userControllers';

import { Router } from 'express';
const userRouter = Router();

    userRouter.route('/')
        .get(getUser)
        .post(addNewUser)
    userRouter.route('/:userId')
        .get(getUserByID)
        .put(updateUserByID)
        .delete(deleteUserByID)

export default userRouter;