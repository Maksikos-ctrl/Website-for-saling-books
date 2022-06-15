import Book from '../models/book.js';
import Author from '../models/author.js';
import fs from 'fs';
import path from 'path';
// import { removeBookCover } from '../routes/books.js';


export const getBooks = async (req, res) => {
   let query = Book.find();
   if (req.query.title != null && req.query.title != '') {
        query = query.regex('title', new RegExp(req.query.title, 'i')); // i flag says us that we don't care 'bout capital Letter or written in  lower case, they will be written the same way
   }
   if (req.query.publishedBefore != null && req.query.publishedBefore != '') {
        query = query.lte('publishDate', req.query.publishedBefore); // lte() function is used to specify a $lte query condition. 
   }
   if (req.query.publishedAfter != null && req.query.publishedAfter != '') {
    query = query.gte('publishDate', req.query.publishedAfter); // lte() function is used to specify a $lte query condition. 
   }
    try {
        // const books = await Book.find({});
        const books = await query.exec();
        res.render('books/index', { books: books, searchOpts: req.query });
    } catch(err) {
        res.redirect('/');
    } 
  
};

export const newBook = async (req, res) => {

    renderNewPage(res, new Book());
    // try {
    //     const authors = await Author.find({});
    //     const book = new Book();
    //     res.render('books/new', {
    //         authors: authors,
    //         book: book
    //     });
    // } catch(err) {
    //     console.log(err);
    //     res.redirect('/books');
    // }
};



export const getBook = (req, res) => {
    
};

export const createBook = async (req, res) => {
    const fileName = req.file != null ? req.file.filename : null;
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publishDate: new Date(req.body.publishDate),
        pageCount: req.body.pageCount,
        description: req.body.description
    });

    saveCover(book, req.body.cover);


    try {
        const newBook = await book.save();
        // res.redirect(`books/${newBook.id}`);
        res.redirect(`books`);
    } catch(err) {

        // if (book.coverImageName != null) {
        //     removeBookCover(book.coverImageName);
        // }
        // console.log(err);
        renderNewPage(res, book, true);
    }
   
};



async function renderNewPage(res, book, hasError = false) {
    try {
        const authors = await Author.find({}),
            params =  { authors: authors, book: book };
        if (hasError) {
            params.errorMessage = 'Error Creating Book'; 
        }    
        // hasError ? params.errorMsg = 'Error creating new book' : params.successMsg = 'New book created';    
        res.render('books/new', params);
    } catch(err) {
        // console.log(err);
        res.redirect('/books');
    }
}

function saveCover(book, coverEncoded) {
    // coverEncoded == null ? coverEncoded = '' : coverEncoded = coverEncoded;
    if (coverEncoded == null) {
        return;
    }
    const cover = JSON.parse(coverEncoded); 
    if (cover != null && imageMimeTypes.includes(cover.type)) {
        book.coverImage = new Buffer.from(cover.data, 'base64'); // from() - creates a Buffer from a string or array of integers 
        book.coverImageType = cover.type;
    }
}



export const updateBook = (req, res) => {
    
};


export const deleteBook = (req, res) => {
    
};
