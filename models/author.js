import mongoose from 'mongoose';
import Book from './book.js';


const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});


authorSchema.pre('remove', function(next) {
    Book.find({ author: this.id }, (err, books) => {
        err ? next(err) : books.length > 0 ? next(new Error('This author still has books!')) : next();
    });
}); // it will run any function we put inside here before deleting author from db


export default mongoose.model('Author', authorSchema); 