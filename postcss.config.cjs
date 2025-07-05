module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      config: './tailwind.config.js', // Optional, specify if config is not in root
    }),
    require('autoprefixer'),
  ]
}
