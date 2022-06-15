import express from 'express'; 
import Book from '../models/book.js';
import multer from 'multer';
import path from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs';

const router = express.Router();

/*The __filename variable stores the absolute path of the current module.

The __dirname variable stores the directory name of the current module. */

import { createBook, getBooks, getBook, deleteBook, updateBook,  newBook } from '../controllers/books.js';

const coverImgPath = 'uploads/bookCovers';


const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
   // uploadPath = path.join('public', Book.coverImgPath),
  
// const __filename = fileURLToPath(import.meta.url),
//       __dirname = path.dirname(__filename);
      // uploadPath = path.join(__dirname, '..', 'public', coverImgPath);
   // uploadPath = path.join(__dirname, 'uploads/bookCovers'),
   // upload = multer({ dest: uploadPath, fileFilter: (req, file, callback) => callback(null,  imageMimeTypes.includes(file.mimetype))});


// router.post('/', upload.single('cover'), createBook);
router.post('/',  createBook);


// export async function removeBookCover(fileName) {
//    fs.unlink(path.join(uploadPath, fileName), err => {
//      if (err) {
//         console.error(err);
//      } 
//    }); // unlink() - removes files which are useless on our server

// }


// All Books Route
router.get('/', getBooks);

// new Book Route
router.get('/new', newBook);




export default router;