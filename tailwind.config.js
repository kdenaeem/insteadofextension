module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./dist/popup.html"],
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            tropikal: ["Tropikal-Bold.otf"],
            "polite-type": ["PoliteType"],
            "getai-type": ["DTGetaiGrotesk"],
            "subjectivity-type": ["Subjectivity-MediumSlanted"],
        },
    },
    plugins: [],
};
