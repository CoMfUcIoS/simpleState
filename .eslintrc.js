const path = require("path");

module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    document: false,
    navigator: false,
    window: false,
    log: false,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  extends: ["airbnb", "prettier"],
  plugins: [
    "babel",
    "react",
    "prettier",
    "json",
    "eslint-plugin-import",
    "eslint-plugin-import-helpers",
  ],
  rules: {
    "arrow-parens": ["error", "as-needed"],
    "import/no-cycle": 0,
    "react/jsx-fragments": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "import/prefer-default-export": 0,
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: ["module", "/^~//", "/^@//"],
        alphabetize: {
          order: "asc",
          ignoreCase: false,
        },
      },
    ],
    complexity: ["warn", 8],
    "max-params": ["warn", 5],
    "max-statements": ["warn", 15],
    "max-statements-per-line": [
      "error",
      {
        max: 1,
      },
    ],
    "max-nested-callbacks": ["warn", 4],
    "max-depth": [
      "warn",
      {
        max: 3,
      },
    ],
    "max-lines": ["warn", 400],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        trailingComma: "all",
        arrowParens: "avoid",
      },
    ],
    "react/jsx-curly-brace-presence": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to", "hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.jsx", "**/*.test.js", "test/**"],
      },
    ],
    "no-unused-expressions": 0,
    "react/jsx-no-literals": [
      1,
      {
        noStrings: false,
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: [path.resolve(__dirname, "src/")],
      },
    },
  },
};
