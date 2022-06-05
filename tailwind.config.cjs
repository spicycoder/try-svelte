const config = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,svelte,ts}"
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require('daisyui')
  ],
};

module.exports = config;
