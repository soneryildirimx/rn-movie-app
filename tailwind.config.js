/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./screens/**/*.{js,jsx,ts,tsx}",
        "./navigation/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            primary: "#1DB954",
            black: "#000000",
            white: "#FFFFFF",
            gray: "#B3B3B3",
            darkGray: "#535353",
            lightGray: "#E5E5E5",
            red: "#D52424",
            blue: "#188FAD",
            yellow: "#FFD500",
            background: "#0f0f0f",
        },
        fontFamily: {
            light: ["Poppins-Light"],
            regular: ["Poppins-Regular"],
            medium: ["Poppins-Medium"],
            semiBold: ["Poppins-SemiBold"],
            bold: ["Poppins-Bold"],
        },
    },
};
