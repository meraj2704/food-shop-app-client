
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

   
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgColor:'var(--bg-color)',
        primary:'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        textColor:'var(--text-color)',
        bgGradient:'var(--gradient-color)',
        bgGradientFinish:'var(--gradient-finish)',
        imgBg:'var(--img-bg)',
        borderColor: 'var(--border-color)',
        cancelButton:'var(--cancel-button)'
      },
    },
  },
  plugins: [],
};