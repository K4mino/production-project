import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
import buildCssLoader from './loaders/buildCssLoaders';
import buildSvgLoader from './loaders/buildSvgLoaders';
import { BuildOptions } from './types/config';

export const buildLoaders = (isDev: boolean): webpack.RuleSetRule[] => {
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },

        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = buildSvgLoader(isDev);

    const cssLoader = buildCssLoader(isDev);

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        babelLoader,
        typeScriptLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ];
};
