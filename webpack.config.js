const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    devServer: {
        //contentBase: path.resolve(__dirname, 'public'),
        static: { directory: path.resolve(__dirname, 'public') },
        //static: './',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }

            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                   
                ]

            },

            {
                test:/.*\.(gif|png|svg|jpe?g)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
}