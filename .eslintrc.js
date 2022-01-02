module.exports = {
    parser: "@typescript-eslint",
    extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier/@/typescript-eslint",
        "plugin:prettier/recommended",
    ],

    parseOptions: {
        ecmaVersion: 2019,
        sourceType: "module"
    },
    rules: {}
}