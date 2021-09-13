// craco.config.js
module.exports = {
  style: {
    postcss: {
      // eslint-disable-next-line no-undef
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
