/* export default { */
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary:'#286363',
                accent:'#7DD3FC',
            },
        },
    },
    plugins: [],
}