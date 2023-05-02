/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    mode: "jit",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
        extend: {},
    },
    variants: {
        extend: {
            backgroundColor: ["dark", "light"], // You can add other plugins you want to use with light mode.
            textColor: ["dark", "light"]
        },
    },
    plugins: [],
}