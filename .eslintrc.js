module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            2,
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            0,
            "single",
            "avoid-escape"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
