import mongoose from 'mongoose';
import path from 'path';

// const coverImgBasePath = 'uploads/bookCovers';


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    publishDate: {
        type: Date,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    coverImgTitle: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Author"
    }
});


bookSchema.virtual('coverImgPath').get(function() {
    if (this.coverImgTitle != null) {
        return path.join('/uploads/bookCovers', this.coverImgTitle);
    }
});

export default mongoose.model('Book', bookSchema); 
// export const coverImgPath = coverImgBasePath;
// module.exports.coverImgBasePath = coverImgBasePath;
// export coverImgBasePath =  coverImgBasePath;