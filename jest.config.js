module.exports = {
    roots: ['<rootDir>/src'],
    testMatch: ['**/?(*.)+(spec|test).+(ts)'],
    moduleFileExtensions: ['js', 'ts', 'json'],
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
    moduleNameMapper: {
        '~/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: 'node',
    setupFiles: [],
}
