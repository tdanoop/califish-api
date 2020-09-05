import { Router } from 'express';
const AppRouter = Router();
import AdminUserRoutes from './adminUserRoutes';
import CartRoutes from './cartRoutes';
import DeliveryRoutes from './deliveryRoutes';
import PaymentRoutes from './paymentRoutes';
import ProductRoutes from './productRoutes';
import UserRoutes from './userRoutes';
import CategoryRoutes from './categoryRoutes';


AppRouter.use('/user', UserRoutes);
AppRouter.use('/category', CategoryRoutes);
AppRouter.use('/product', ProductRoutes);
AppRouter.use('/CartRoutes', CartRoutes);
AppRouter.use('/adminuser', AdminUserRoutes);
AppRouter.use('/DeliveryRoutes', DeliveryRoutes);
AppRouter.use('/PaymentRoutes', PaymentRoutes);



export default AppRouter;