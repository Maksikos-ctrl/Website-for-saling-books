import express from 'express'; 
import Book from '../models/book.js';
import multer from 'multer';
import path from 'path';

const imageMimeTypes = ['images/jpeg', 'images/png', 'images/gif'],
   uploadPath = path.join('public', Book.coverImgBasePath),
   upload = multer({ dest: uploadPath, fileFilter: (req, file, callback) => callback(null, true)});

import { createBook, getBooks, getBook, deleteBook, updateBook,  newBook } from '../controllers/books.js';

const router = express.Router();

// All Books Route
router.get('/', getBooks);

// new Book Route
router.get('/new', newBook);


router.post('/', upload.single('cover'), createBook);

export default router;