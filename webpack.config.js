const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
    entry: './src/main.ts',
    resolve: {
        extensions: ['.ts','.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader']
            },
            {
                test: /\.(html|css)$/,
                use: ['raw-loader']
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}
