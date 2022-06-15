import mongoose from 'mongoose';



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
    coverImg: {
        type: Buffer,
        required: true
    },
    coverImgType: {
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
    if (this.coverImg != null && this.coverImgType != null) {
        return `data:${this.coverImgType};charset=utf-8;base64,${this.coverImg.toString('base64')}`; // base64 - converts a Buffer to a string, 
       
    }
});

export default mongoose.model('Book', bookSchema); 
// export const coverImgPath = coverImgBasePath;
// module.exports.coverImgBasePath = coverImgBasePath;
// export coverImgBasePath =  coverImgBasePath;