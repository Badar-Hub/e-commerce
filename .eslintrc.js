module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    "plugin:vue/essential",
    "@vue/airbnb",
    "@vue/typescript",
    "plugin:prettier/recommended" // add prettier-eslint plugin which will uses the `.prettierrc.js` config
  ],

  rules: {
    "import/prefer-default-export": "warn",
    "import/export": "warn",
    "comma-dangle": ["warn", "never"],
    "class-methods-use-this": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-param-reassign": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ]
  },

  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2018
  },

  extends: [
    "plugin:vue/essential",
    "@vue/airbnb",
    "@vue/typescript",
    "plugin:prettier/recommended"
  ]
};
