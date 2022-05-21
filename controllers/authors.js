import Author from '../models/author.js';

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
        console.log(err); 
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
        let locals = 'All is alright';
        const newAuthor = await author.save(); // we're saving here our new received name of author
        // res.redirect(`authors/${newAuthor.id}`);
        res.redirect(`authors`, locals);
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
export const updateUser = (req, res) => {
    
};


export const deleteUser = (req, res) => {
    
};

