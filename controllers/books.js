import Book from '../models/book.js';
import Author from '../models/author.js';

export const getBooks = async (req, res) => {
    res.send('All Books');
};

export const newBook = async (req, res) => {
    try {
        const authors = await Author.find({});
        const book = new Book();
        res.render('books/new', {
            authors: authors,
            book: book
        });
    } catch(err) {
        console.log(err);
        res.redirect('/books');
    }
};



export const getBook = (req, res) => {
    
};

export const createBook = async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publishDate: new Date(req.body.publishDate),
        pageCount: req.body.pageCount,
        description: req.body.description
    });

   
};
export const updateBook = (req, res) => {
    
};


export const deleteBook = (req, res) => {
    
};
