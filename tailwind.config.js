module.exports = {
  content: [
    './resources/**/*.{js,ts,jsx,tsx}', 
    './src/**/*.js',        
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
