module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  plugins: ["react", "jsx-a11y", "import"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    radix: 0,
    eqeqeq: 0,
    camelcase: 0,
    "one-var": 0,
    "array-callback-return": [0],
    "consistent-return": [0, { treatUndefinedAsUnspecified: true }],
    indent: ["error", 2, { SwitchCase: 1 }],
    // spacing
    "no-multiple-empty-lines": [
      2,
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0
      }
    ],
    "no-param-reassign": [0],
    // strings
    quotes: [2, "double", "avoid-escape"],
    // code arrangement matter
    "no-use-before-define": [
      2,
      {
        functions: false
      }
    ],
    // make it meaningful
    "prefer-const": 1,
    // keep it simple
    complexity: [1, 25],
    // react
    "react/prefer-es6-class": 0,
    "react/jsx-filename-extension": 0,
    "jsx-a11y/media-has-caption": 0,
    "react/jsx-indent": [2, 2],
    "comma-dangle": ["error", "only-multiline"],
    "arrow-body-style": [0, "as-needed"],
    "no-unused-vars": [
      "error",
      {
        args: "none"
      }
    ],
    "react/jsx-boolean-value": [1, "always"],
    "react/forbid-prop-types": [
      1,
      {
        forbid: ["any"]
      }
    ],
    "import/prefer-default-export": [1],
    "no-underscore-dangle": [0],
    "no-console": [
      0,
      {
        allow: ["warn", "error"]
      }
    ],
    "no-restricted-syntax": [0],
    "no-useless-constructor": [0],
    "no-array-index-key": [0],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    "no-unused-expressions": [
      "error",
      {
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    "max-len": [
      "error",
      {
        code: 100,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    "no-mixed-operators": [0],
    "react/no-did-mount-set-state": [0]
  }
};
