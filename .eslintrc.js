module.exports = {
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "env": {
        "browser": true,
        "node": true
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    }
};