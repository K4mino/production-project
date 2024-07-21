import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions, BuildPaths } from './types/config';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';


export const buildPlugins = ({ paths, isDev }:BuildOptions): webpack.WebpackPluginInstance[] => [
    new HtmlWebpackPlugin({
        template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev),
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({openAnalyzer: false}),
];
