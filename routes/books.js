import express from 'express'; 
import Book from '../models/book.js';

import { createBook, getBooks, getBook, deleteBook, updateBook,  newBook } from '../controllers/books.js';

const router = express.Router();

// All Books Route
router.get('/', getBooks);

// new Book Route
router.get('/new', newBook);


router.post('/', createBook);

export default router;