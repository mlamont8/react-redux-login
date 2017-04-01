import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import users from './routes/users';

let app = express();

app.use(bodyParser.json());

// route for user signup
app.use('/api/users', users)

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'))
