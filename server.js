// if (process.env.NODE_ENV !== 'production') {
   
// }

/*https://cloud.mongodb.comhttps://cloud.mongodb.com account iblonik333@gmail.com */

import 'dotenv/config';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose'; 
import expressLayouts from 'express-ejs-layouts';
import {fileURLToPath} from 'url';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import nodemailer from 'nodemailer';

import mainRouter from './routes/main.js';
import authorRouter from './routes/authors.js';


const app = express(),
    port = 9000,
    __filename = fileURLToPath(import.meta.url),
    __dirname = path.dirname(__filename);


// let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "Vasya@gmail.com",
//         pass: "qweeerty123"
//     }
// }),
// mailOpts = {
//     from: "maksikos973@gmail.com",
//     to: "",
//     subject: "",
//     text: ""
// };

// transporter.sendMail(mailOpts, (err, success) => {
//     err ? console.log(err) : console.log('The email has been sent yet');
// });

app.set('view engine', 'ejs');  // ejs is a view engine
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(methodOverride('_method')); // we need it for update and delete routes
app.use(expressLayouts);
app.use(express.static('public'));  // PUBLIC FOLDER(css and js)
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false })); 

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });// connect our .env file 

const db = mongoose.connection;

db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to Mongoose'));


app.use('/', mainRouter);
app.use('/authors', authorRouter);


// authors/new

app.listen(process.env.PORT || port);


