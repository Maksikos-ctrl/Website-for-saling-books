import Book from '../models/book.js';

export const getUser = async (req, res) => {
    let books;
    try {
        books = await Book.find().sort({ createdAt: 'description' }).limit(10).exec();
    } catch(err) {
        books = [];
    }
    res.render('index', { books: books });
};

export const getUsers = (req, res) => {
    
};

export const createUser = (req, res) => {
    
};

export const updateUser = (req, res) => {
    
};


export const deleteUser = (req, res) => {
    
};

