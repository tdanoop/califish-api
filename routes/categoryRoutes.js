import {
    addCategory,
    getCategory,
    getcatgegoryByID,
    updateCategoryByID,
    deleteCategoryByID
} from '../controllers/categoryControllers';

import { Router } from 'express';
const categoryRouter = Router();

categoryRouter.route('/')
        .get(getCategory)
        .post(addCategory)
        categoryRouter.route('/:catId')
        .get(getcatgegoryByID)
        .put(updateCategoryByID)
        .delete(deleteCategoryByID)

export default categoryRouter;