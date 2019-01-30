const pkg = require('./package.json')

const reactVersion = () => {
  if (pkg.dependencies && pkg.dependencies.react) {
    return { version: pkg.dependencies.react.replace(/[^0-9.]/g, '') }
  }
  if (pkg.devDependencies && pkg.devDependencies.react) {
    return { version: pkg.devDependencies.react.replace(/[^0-9.]/g, '') }
  }
}

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "mocha": true
    },
    "extends": [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    "globals": {
        "expect": true,
        "ga": true,
        "logAccess": true,
        "logAnalytics": true,
        "logEvent": true,
        "logFocus": true,
        "logMount": true,
        "logParse": true,
        "logPlayer": true,
        "logScroll": true,
        "logSuccess": true,
        "logTransition": true,
        "logError": true,
        "process": true,
        "sendEvent": true
    },
    "parser": 'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": 'module'
    },
    "plugins": [
        'react'
    ],
    "settings": {
        "react": {
            ...reactVersion()
        }
    },
    "rules": {
        "accessor-pairs": 'error',
        "array-bracket-spacing": [
            'error',
            'never'
        ],
        "array-callback-return": 'error',
        "arrow-body-style": 'off',
        "arrow-parens": 'off',
        "arrow-spacing": [
            'error',
            {
                "after": true,
                "before": true
            }
        ],
        "block-scoped-var": 'error',
        "block-spacing": 'error',
        "brace-style": [
            'error',
            "1tbs"
        ],
        "callback-return": 'error',
        "camelcase": 'off',
        "capitalized-comments": 'off',
        "class-methods-use-this": 'off',
        "comma-dangle": 'error',
        "comma-spacing": [
            'error',
            {
                "after": true,
                "before": false
            }
        ],
        "comma-style": [
            'error',
            'last'
        ],
        "complexity": 0,
        "computed-property-spacing": [
            'error',
            'never'
        ],
        "consistent-return": 'off',
        "consistent-this": 'error',
        "curly": 'error',
        "default-case": 'off',
        "dot-location": 'off',
        "dot-notation": 'error',
        "eol-last": 'error',
        "eqeqeq": 'error',
        "func-call-spacing": 'off',
        "func-name-matching": 'error',
        "func-names": 'error',
        "func-style": [
            'error',
            'expression'
        ],
        "generator-star-spacing": 'error',
        "global-require": 'off',
        "guard-for-in": 'off',
        "handle-callback-err": 'error',
        "id-blacklist": 'error',
        "id-length": 'off',
        "id-match": 'error',
        "indent": ['error', 4, {'SwitchCase': 1}],
        "init-declarations": 'off',
        "jsx-quotes": [
            'error',
            'prefer-double'
        ],
        "key-spacing": 'error',
        "keyword-spacing": [
            'error',
            {
                "after": true,
                "before": true
            }
        ],
        "line-comment-position": 'off',
        "linebreak-style": [
            'error',
            "unix"
        ],
        "lines-around-comment": 'off',
        "lines-around-directive": 'error',
        "max-depth": 'error',
        "max-len": 'off',
        "max-lines": 'off',
        "max-nested-callbacks": 'error',
        "max-params": 'off',
        "max-statements": 'off',
        "max-statements-per-line": 'error',
        "multiline-ternary": 'off',
        "new-parens": 'error',
        "newline-after-var": 'off',
        "newline-before-return": 'off',
        "newline-per-chained-call": 'error',
        "no-alert": 'error',
        "no-array-constructor": 'error',
        "no-await-in-loop": 'error',
        "no-bitwise": 'error',
        "no-caller": 'error',
        "no-catch-shadow": 'error',
        "no-confusing-arrow": 'error',
        "no-console": 0,
        "no-continue": 'error',
        "no-div-regex": 'error',
        "no-duplicate-imports": 'error',
        "no-else-return": 'off',
        "no-empty-function": 'off',
        "no-eq-null": 'error',
        "no-eval": 'error',
        "no-extend-native": 'error',
        "no-extra-bind": 'error',
        "no-extra-label": 'error',
        "no-extra-parens": 'off',
        "no-floating-decimal": 'error',
        "no-implicit-globals": 'error',
        "no-implied-eval": 'error',
        "no-inline-comments": 'off',

        // Disabling to allow class properties.
        "no-invalid-this": 'off',
        "no-iterator": 'error',
        "no-label-var": 'error',
        "no-labels": 'error',
        "no-lone-blocks": 'error',
        "no-lonely-if": 'off',
        "no-loop-func": 'error',
        "no-magic-numbers": 'off',
        "no-mixed-operators": 'off',
        "no-mixed-requires": 'off',
        "no-multi-spaces": 'off',
        "no-multi-str": 'error',
        "no-multiple-empty-lines": [
            'error',
            { max: 1 }
        ],
        "no-native-reassign": 'error',
        "no-negated-condition": 'off',
        "no-negated-in-lhs": 'error',
        "no-nested-ternary": 'error',
        "no-new": 'error',
        "no-new-func": 'error',
        "no-new-object": 'error',
        "no-new-require": 'error',
        "no-new-wrappers": 'error',
        "no-octal-escape": 'error',
        "no-param-reassign": 'off',
        "no-path-concat": 'error',
        "no-plusplus": 'off',
        "no-process-env": 'off',
        "no-process-exit": 'error',
        "no-proto": 'error',
        "no-prototype-builtins": 'error',
        "no-restricted-globals": 'error',
        "no-restricted-imports": 'error',
        "no-restricted-modules": 'error',
        "no-restricted-properties": 'error',
        "no-restricted-syntax": 'error',
        "no-return-assign": 'off',
        "no-return-await": 'error',
        "no-script-url": 'error',
        "no-self-compare": 'error',
        "no-sequences": 'error',
        "no-shadow": 'off',
        "no-shadow-restricted-names": 'error',
        "no-spaced-func": 'off',
        "no-sync": 'error',
        "no-tabs": 'error',
        "no-template-curly-in-string": 'error',
        "no-ternary": 'off',
        "no-throw-literal": 'error',
        "no-trailing-spaces": 'error',
        "no-undef": 'error',
        "no-undef-init": 'error',
        "no-undefined": 'off',
        "no-underscore-dangle": 'off',
        "no-unmodified-loop-condition": 'off',
        "no-unneeded-ternary": [
            'error',
            {
                "defaultAssignment": true
            }
        ],
        "no-unused-expressions": 'off',
        "no-use-before-define": 'off',
        "no-useless-call": 'error',
        "no-useless-computed-key": 'error',
        "no-useless-concat": 'error',
        "no-useless-constructor": 'error',
        "no-useless-escape": 'error',
        "no-useless-rename": 'error',
        "no-useless-return": 'error',
        "no-var": 'error',
        "no-void": 'error',
        "no-warning-comments": 'off',
        "no-whitespace-before-property": 'error',
        "no-with": 'error',
        "object-curly-newline": [
            'error', {
                "minProperties": 3,
                "consistent": true
            }
        ],
        "object-curly-spacing": [
            'error',
            "always"
        ],
        "object-property-newline": [
            'error',
            {
                "allowMultiplePropertiesPerLine": true
            }
        ],
        "object-shorthand": 'off',
        "one-var": 'off',
        "one-var-declaration-per-line": 'error',
        "operator-assignment": 'off',
        "operator-linebreak": [
            'off'
        ],
        "padded-blocks": 'off',
        "prefer-arrow-callback": 'error',
        "prefer-const": 'off',
        "prefer-numeric-literals": 'error',
        "prefer-reflect": 'off',
        "prefer-rest-params": 'error',
        "prefer-spread": 'error',
        "prefer-template": 'off',
        "quote-props": 'off',
        "quotes": 'off',
        "radix": [
            'error',
            'as-needed'
        ],
        "react/display-name": 'off',
        "react/prop-types": 'off',
        "react/no-unused-prop-types": 'off',
        "require-await": 'error',
        "require-jsdoc": 'error',
        "rest-spread-spacing": [
            'error',
            'never'
        ],
        "semi": ['error', 'never'],
        "semi-spacing": 'error',
        "sort-imports": 'off',
        "sort-keys": 'off',
        "sort-vars": 'off',
        "space-before-blocks": 'error',
        "space-before-function-paren": 'off',
        "space-in-parens": [
            'error',
            'never'
        ],
        "space-infix-ops": 'error',
        "space-unary-ops": 'error',
        "spaced-comment": 'off',
        "strict": 'error',
        "symbol-description": 'error',
        "template-curly-spacing": [
            'error',
            'never'
        ],
        "unicode-bom": [
            'error',
            'never'
        ],
        "valid-jsdoc": 'off',
        "vars-on-top": 'error',
        "wrap-iife": 'error',
        "wrap-regex": 'error',
        "yield-star-spacing": 'error',
        "yoda": [
            'error',
            'never'
        ]
    }
};
