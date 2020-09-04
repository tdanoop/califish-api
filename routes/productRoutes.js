import {
    addNewUser,
    getUser,
    getUserByID,
    updateUserByID,
    deleteUserByID
} from '../controllers/appControllers';

import { Router } from 'express';
const productRouter = Router();

    // userRouter.route('/')
    //     .get(getUser)
    //     .post(addNewUser)
    // userRouter.route('/:userId')
    //     .get(getUserByID)
    //     .put(updateUserByID)
    //     .delete(deleteUserByID)

export default productRouter;