import express from 'express'; 
import Book from '../models/book.js';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/main.js';

const router = express.Router();

router.get('/', getUser);


export default router; // we have to do it so that index.js file can see it