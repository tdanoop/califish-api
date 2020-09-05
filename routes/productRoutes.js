import {
    addProduct,
    getProduct,
    getProductByID,
    updateProductByID,
    deleteProductByID
} from '../controllers/productControllers';

import { Router } from 'express';
const productRouter = Router();

 productRouter.route('/')
    .get(getProduct)
     .post(addProduct)
 productRouter.route('/:productId')
     .get(getProductByID)
     .put(updateProductByID)
     .delete(deleteProductByID)

export default productRouter;