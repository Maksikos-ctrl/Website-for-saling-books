import Book from '../models/book.js';
import Author from '../models/author.js';



export const getBooks = async (req, res) => {
    res.send('All Books');
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
    const fileName = req.file != null ? req.file.fileName : null;
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publishDate: new Date(req.body.publishDate),
        pageCount: req.body.pageCount,
        coverImageName: fileName,
        description: req.body.description
    });
    try {
        const newBook = await book.save();
        // res.redirect(`books/${newBook.id}`);
        res.redirect(`books`);
    } catch (err) {
        console.log(err);
        renderNewPage(res, book, true);
    }
   
};


async function renderNewPage(res, book, hasError = false) {
    try {
        const authors = await Author.find({}),
            params =  { authors: authors, book: book };
        hasError ? params.errorMsg = 'Error creating new book' : params.successMsg = 'New book created';    
        res.render('books/new', params);
    } catch(err) {
        console.log(err);
        res.redirect('/books');
    }
}

export const updateBook = (req, res) => {
    
};


export const deleteBook = (req, res) => {
    
};
