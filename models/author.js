import mongoose from 'mongoose';


const authorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
});




export default mongoose.model('Author', authorSchema); 