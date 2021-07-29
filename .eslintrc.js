module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },

  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    // 'import',
    // 'simple-import-sort',
  ],

  extends: [
    "airbnb-base",
    "airbnb",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // 'plugin:import/typescript',
  ],

  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // JSX support 를 허용, JSX 문법을 사용할 수 있도록 한다.
    },
    project: "./tsconfig.json",
  },

  rules: {
    "react/react-in-jsx-scope": "off", // React v17 부터 react import 필요 없어졌음.
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],

    "@typescript-eslint/explicit-module-boundary-types": "off",

    // https://torbjorn.tistory.com/675
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],

    "prettier/prettier": [
      "warn",
      {
        singleQuote: true,
        trailingComma: "all",
      },
    ],

    // import할 때 js/jsx/ts/tsx 파일은 extension을 붙이지 않고, json에는 항상 붙이게 합니다.
    "import/extensions": [
      "error",
      {
        pattern: {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
          json: "always",
        },
      },
    ],

    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
