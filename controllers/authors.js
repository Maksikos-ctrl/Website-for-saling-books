import Author from '../models/author.js';

export const getUsers = (req, res) => {
    res.render('authors/index');
};

export const newUser = (req, res) => {
    res.render('authors/new', { author: new Author() });
};



export const getUser = (req, res) => {
    
};

export const createUser = (req, res) => {
    const author = new Author({
        
    });
    res.send(req.body.name);
};

export const updateUser = (req, res) => {
    
};


export const deleteUser = (req, res) => {
    
};

