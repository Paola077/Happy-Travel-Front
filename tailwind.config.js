const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', 
    './src/.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-custom': 'inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
});