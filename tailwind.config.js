module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./dist/popup.html"],
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            "polite-type": ["PoliteType"],
        },
    },
    plugins: [],
};
