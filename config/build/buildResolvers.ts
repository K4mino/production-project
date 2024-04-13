import path from 'path';
import webpack from 'webpack';

export const buildResolvers = (): webpack.ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}