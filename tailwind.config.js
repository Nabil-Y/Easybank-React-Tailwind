module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(233, 26%, 24%)',
        'lime-green': 'hsl(136, 65%, 51%)',
        'bright-cyan': 'hsl(192, 70%, 51%)',
        'grayish-blue': 'hsl(233, 8%, 62%)',
        'grayish-blue-light': 'hsl(220, 16%, 96%)',
        'gray-light': 'hsl(0, 0%, 98%)'
      }
    },
    fontFamily: {
      'open': ['"Open Sans"', 'sans-serif']
    }
  },
  plugins: [],
}
