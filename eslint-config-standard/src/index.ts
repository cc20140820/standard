import type { Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  'no-plusplus': 'off',
  'no-console': ['error', { allow: ['warn', 'error'] }],
  'class-methods-use-this': 'off',
  'consistent-return': 'off',
  'no-nested-ternary': 'off',
  'no-param-reassign': 'off',
  'no-shadow': 'off',

  'import/no-import-module-exports': 'off',
  'import/prefer-default-export': 'off',
  'import/no-unresolved': 'off',
  'import/no-extensions': 'off',
  'import/extensions': 'off',
  // React
  'react/react-in-jsx-scope': 'off',
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
  'react/jsx-fragments': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-filename-extension': [
    'error',
    { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
  ],
  'react/button-has-type': 'off',
  'react/state-in-constructor': 'off',
  'react-hooks/exhaustive-deps': 'off',

  // A11y
  'jsx-a11y/click-events-have-key-events': 'off',
  'jsx-a11y/interactive-supports-focus': 'off',
  'jsx-a11y/no-static-element-interactions': 'off',

  // TypeScript
  '@typescript-eslint/no-shadow': 'off'
}

export default <Linter.Config>{
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true
    },
    babelOptions: {
      presets: [
        [
          require.resolve('@babel/preset-env'),
          {
            useBuiltIns: 'usage',
            corejs: { version: 3 },
            loose: true
          }
        ],
        [require.resolve('@babel/preset-react')]
      ],
      plugins: [
        [
          require.resolve('@babel/plugin-proposal-decorators'),
          {
            legacy: true
          }
        ],
        [
          require.resolve('@babel/plugin-proposal-class-properties'),
          { loose: true }
        ]
      ]
    }
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  rules,
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        warnOnUnsupportedTypeScriptVersion: true,
        project: './tsconfig.json'
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:prettier/recommended'
      ],
      rules
    }
  ]
}
