module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:react/jsx-runtime'],
  rules: {
    'react-native/no-inline-styles': 0,
    'prettier/prettier': ['error', { 'no-inline-styles': false }],
    "requireConfigFile": false
  },
};