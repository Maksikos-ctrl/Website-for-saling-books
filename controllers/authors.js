import Author from '../models/author.js';
import Book from '../models/book.js';

export const getUsers = async (req, res) => {
    let searchOpts = {};
    if (req.query.name != null && req.query.name != '') {
        searchOpts.name =  RegExp(req.query.name, 'i'); // i says us if we casually typed O like JOhn, it will be acceptable and will be displaying as small o
    }       // query === ../name=id
    try {
        const authors = await Author.find(searchOpts);
        res.render('authors/index', { authors: authors, searchOpts: req.query});
    }
    catch (err) {
        // console.log(err); 
        res.redirect('/'); // if smth goes wrong, we'll redirect to the main page
    }
    // res.render('authors/index');
};

export const newUser = (req, res) => {
    res.render('authors/new', { author: new Author() });
};



export const getUser = (req, res) => {
    
};

export const createUser = async (req, res) => {
    const author = new Author({
        name: req.body.name
    });
    try {
        // let locals = 'All is alright';
        const newAuthor = await author.save(); // we're saving here our new received name of author
        res.redirect(`authors/${newAuthor.id}`);
    }
    catch (err) {
        let locals = 'Smth went wrong while u were creating author';
        res.render('authors/new', { author: author, errorMsg: locals}); // res.redirect(`authors/${newAuthor.id}`);
    }

    // author.save((err, newAuthor) => {
    //     let locals = 'Smth went wrong while u were creating author';
    //     err ? res.render('authors/new', { author: author, errorMsg: locals}) : res.redirect(`authors`, locals); // res.redirect(`authors/${newAuthor.id}`);
    // });
    // res.send(req.body.name);
};


export const getId = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id),
            books = await Book.find({ author: author.id }).limit(6).exec();
        res.render(`authors/show`, { author: author, booksByAuthor: books});    
    } catch(err) {
        console.log(err);
        res.redirect('/');
    }

};

export const editUser = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id); // find autor in mongoDb by id
        res.render('authors/edit', { author: author });   
    }
    catch(err) {
        res.redirect('/authors');
    }
 
};


export const updateUser = async (req, res) => {
    let author;
    try {
        author = await Author.findById(req.params.id);
        author.name = req.body.name; // we're changing the name of given name from db before saving
        await author.save(); // we're saving here our new received name of author
        res.redirect(`/authors`);
    }
    catch (err) {
        let locals = 'Error of Updating Author';
        author == null ? res.redirect('/') : res.render('/authors/edit', { author: author, errorMsg: locals});
    }
};


export const deleteUser = async (req, res) => {
    let author;
    try {
        author = await Author.findById(req.params.id);
        await author.remove(); 
        res.redirect('/authors');
     }
    catch (err) {
        author == null ? res.redirect('/') : res.redirect(`/authors/${author.id}`);
    }
};

