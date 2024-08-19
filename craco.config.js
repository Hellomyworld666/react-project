const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  // Less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  // webpack 
  webpack: {
    alias: {
      // "@": path.resolve(__dirname, "src")
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils")

    }
  }
}