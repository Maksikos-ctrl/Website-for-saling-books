import express from 'express'; 
import Author from '../models/author.js';

import { createUser, getUsers, getUser, deleteUser, updateUser,  newUser, getId, editUser } from '../controllers/authors.js';

const router = express.Router();

// Author route

// All Authors Route
router.get('/', getUsers);

// new Author Route
router.get('/new', newUser);


router.get('/:id', getId);

router.get('/:id/edit', editUser);

// Update Author Route
router.put('/:id', updateUser);


router.post('/', createUser);

router.delete('/:id', deleteUser);

export default router;