const path =  require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const  webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry:{
        app:'./src/index.js'
    },
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        hot: true
    },
    plugins:[
        new cleanWebpackPlugin(['dist']),
        new HtmlwebpackPlugin({
            title:'Development'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
                {
                    test: /\.(png|sug|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test:/\.(woff|woff2|eot|ttf|otf)$/,
                    use:[
                        'file-loader'
                    ]
                },
                {
                    test: /\.(csv |tsv)$/,
                    use:[
                        'csv-loader'
                    ]
                },
                {
                    test: /\.xml$/,
                    use:[
                        'xml-loader'
                    ]
                }
        ]
    }

};
