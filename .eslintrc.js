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
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: "module",
  },
  plugins: [
    "babel",
    "react",
    "prettier",
    "json",
    "eslint-plugin-import-helpers",
    "@typescript-eslint",
  ],
  rules: {
    "import/extensions": [
      "error",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.{js,ts,tsx,jsx}", "webpack.*.ts"] },
    ],
    "import/no-unresolved": "off",
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
    "no-unused-expressions": 0,
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
    "arrow-parens": ["error", "as-needed"],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".jsx", ".tsx"],
      },
    },
  },
};
