module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    setupFiles: ['./jest/setup.js'], // Ensure this file exists
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        'node_modules/(?!(react-native|@react-native|@testing-library/react-native|@react-native/polyfills))',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    globals: {
        __DEV__: true, // Explicitly set for React Native tests
    },
};
