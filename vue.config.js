module.exports = {
    productionSourceMap: false,
    devServer: {
        proxy: "http://localhost:3001"
    },
    outputDir: "../client-build"
}