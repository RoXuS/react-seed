module.exports = {
    entry: {
      'react-component-todolist': ['./src/todolist.js']
    },
    output: {
        path: __dirname,
        filename: "./lib/todolist.js"
    },

    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
      ]
    },
};
