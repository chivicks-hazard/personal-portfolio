/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            ghostwhite: "#f8f8ff",
            ivory: "#fffff0",
            aliceblue: "#f0f8ff",
        },
        extend: {
            screens: {
                "4xs": "320px",
                "3xs": "360px",
                "2xs": "400px",
                xs: "480px",
            },
        },
    },
    plugins: [],
};
