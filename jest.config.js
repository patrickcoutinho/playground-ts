module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  clearMocks: true,
  coverageDirectory: 'coverage',
};
