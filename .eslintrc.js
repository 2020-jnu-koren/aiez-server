module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        trailingComma: "none"
      }
    ],
    "no-console": "off"
    // semi: ["error", "always"],
    // quotes: ["error", "double"],
    // indent: ["error", 2],
  }
};
