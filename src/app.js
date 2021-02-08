import express from 'express';
import compression from 'compression';

/* Routes */
import test from './routes/test';
/*End Routes */

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(express.static('public'));

app.use('/', test);

module.exports = app;
