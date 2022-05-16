// if (process.env.NODE_ENV !== 'production') {
   
// }

import 'dotenv/config';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose'; 
import expressLayouts from 'express-ejs-layouts';

import {fileURLToPath} from 'url';
import mainRouter from './routes/main.js';

const app = express(),
    port = 9000,
    __filename = fileURLToPath(import.meta.url),
    __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');  // ejs is a view engine
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));  // PUBLIC FOLDER(css and js)

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });// connect our .env file 

const db = mongoose.connection;

db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to Mongoose'));




app.use('/', mainRouter);

app.listen(process.env.PORT || port);


