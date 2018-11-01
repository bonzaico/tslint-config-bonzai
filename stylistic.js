module.exports = {
    "rules": {
        "indent": [
            true,
            4,
            {
                "SwitchCase": 1
            }
        ],
        "array-bracket-spacing": [true, "never"],
        "block-spacing": [true, "always"],
        "brace-style": true,
        "variable-name": true,
        "eofline": true,
        "ter-func-call-spacing": [true, "never"],
        "linebreak-style": true,
        "max-line-length": {
            severity: "warn",
            options: {
                limit: 90
            }
        },
        "new-parens": true,
        "no-bitwise": true,
        "ter-no-mixed-spaces-and-tabs": true,
        "no-consecutive-blank-lines": true,
        "no-trailing-whitespace": true,
        "object-curly-spacing": [true, "always"],
        "one-variable-per-declaration": false,
        "ter-padded-blocks": [true, "never"],
        "quotemark": [true, "double"],
        "semicolon": [true, "always"],
        "space-in-parens": [true, "never"],
        "adjacent-overload-signatures": true,
        "array-type": [true, "array"],
        "arrow-return-shorthand": true,
        "class-name": true,
        "file-name-casing": [true, "kebab-case"],
        "no-unnecessary-callback-wrapper": true,
        "number-literal-format": true,
        "prefer-function-over-method": { severity: "warn" },
        "prefer-template": true,
        "whitespace": true,
        "object-literal-sort-keys": false
    }
};
