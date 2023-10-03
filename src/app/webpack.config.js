const path = require('path')

module.exports = {
    entry: {
        index : path.resolve(__dirname,".src/page.js")
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].[ext]'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            sources: {
                                list: [
                                    {
                                        tag: 'source',
                                        attribute: 'src',
                                        type:'src'
                                    }
                                ]
                            }
                        }
                    }
                ]
        },
            {
                test: /\.mp4$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath:'video'
                    }
                }
            },
            {
                test: /\.mp4$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        decoding:'binary',
                        name: '[name].[hash].[ext]',
                        outputPath:'video'
                    }
                }
            }
        ]
    }
}