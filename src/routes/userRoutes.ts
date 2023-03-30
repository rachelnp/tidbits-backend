import { Router } from 'express';
import { createUser, getUser, loginUser, editUser, getAllUsers, getCurrentUser } from '../controllers/userController';


const router = Router();


router.post('/', createUser);
router.get('/', getAllUsers);
router.post('/login', loginUser);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.get('/:id', getUser);
router.get('/:id', getCurrentUser);
router.put('/:id', editUser);

export default router;