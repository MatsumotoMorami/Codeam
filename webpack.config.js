const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // ... other webpack configurations ...
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true // 非常重要！
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[hash].css'
        })
    ]
    // ... other webpack configurations ...
};