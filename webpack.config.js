module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: "babel-loader?optional[]=runtime&stage=0" }
        ]
    },
    devServer: {
        port: 1977
    }
};
