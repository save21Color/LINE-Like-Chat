const serve = require('webpack-serve');
const config = require('./webpack.config.js');
const argv = {}
const options = { 
    config, content: 'dist/' ,open: true, port:8081,
}

serve(argv, options);