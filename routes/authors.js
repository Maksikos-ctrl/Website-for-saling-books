import express from 'express'; 
import Author from '../models/author.js';

import { createUser, getUsers, getUser, deleteUser, updateUser,  newUser } from '../controllers/authors.js';

const router = express.Router();

// All Authors Route
router.get('/', getUsers);

// new Author Route
router.get('/new', newUser);


router.post('/', createUser);

export default router;