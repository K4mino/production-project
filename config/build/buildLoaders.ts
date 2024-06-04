import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const  buildLoaders = (isDev: boolean): webpack.RuleSetRule[] => {

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins:[
                    [
                        "i18next-extract",
                        {
                            locales:["ru", "en"],
                            keyAsDefaultValue:true
                        }
                    ]
                ]
            },
            
        }
    }

    const fileLoader = {
        test:/\.(png|jpe?g|gif)$/i,
        use:[
            {
                loader:'file-loader',
            }
        ]
    }

    const svgLoader = {
        test: /\.svg$/,
        use:['@svgr/webpack'],
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader:'css-loader',
                options: {
                    modules:{
                        auto:(resPath:string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]'
                    }
                }
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    }

    const typeScriptLoader ={
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        babelLoader,
        typeScriptLoader,
        cssLoader,
        svgLoader,
        fileLoader
    ]
}