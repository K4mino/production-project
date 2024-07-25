export default function buildSvgLoader(isDev: boolean) {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
}