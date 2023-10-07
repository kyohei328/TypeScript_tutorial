const path = require('path');

module.exports = {
    entry: {
        bundle: "./src/index.ts",
    },
    node: {
        __filename: false, // __filenameを無効化
        __dirname: false,  // __dirnameを無効化
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },
    mode: "development",
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devServer: {
        static: {
            directory: `${__dirname}/dist`,
        },
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
            },
        ],
    },
};