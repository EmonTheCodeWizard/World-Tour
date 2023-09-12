/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    themes: [
        {
            mytheme: {

                "primary": "#bd1aef",

                "secondary": "#8e36ed",

                "accent": "#ceb827",

                "neutral": "#261d2b",

                "base-100": "#faf8fc",

                "info": "#3baece",

                "success": "#68e8c4",

                "warning": "#f6de65",

                "error": "#fb1713",
            },
        },
    ],
    plugins: [require("daisyui")],
}

