const express = require('express');
const webpack = require('webpack');
const webpackDevMiddle = require('webpack-dev-middleware');
const port =  process.env.PORT || 3000;
const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(webpackDevMiddle(compiler,{
    publicPath:config.output.publicPath
}));

app.listen(port, ()=> console.log(`Server is running on ${port}`));