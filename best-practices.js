module.exports = {
    "rules": {
        "switch-default": true,
        "triple-equals": [true, "allow-null-check"],
        "forin": true,
        "ban": { severity: "warn", options: ["alert"] },
        "label-position": true,
        "no-arg": true,
        "no-empty": false,
        "no-eval": true,
        "no-switch-case-fall-through": true,
        "no-multi-spaces": true,
        "no-construct": true,
        "ter-no-proto": true,
        "no-duplicate-variable": true,
        "ter-no-script-url": false,
        "ter-no-self-compare": true,
        "no-unused-expression": [true, "allow-fast-null-checks"],
        "radix": false,
        "no-this-assignment": { severity: "warn" },
        "no-duplicate-switch-case": true
    }
};
