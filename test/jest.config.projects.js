const path = require('path')

module.exports = {
  roots: [path.join(__dirname, '../src')],
  testEnvironment: 'node',
  testMatch: ['**/*.test.js'],
  moduleDirectories: ['node_modules', __dirname],
  coverageDirectory: path.join(__dirname, '../coverage/collective'),
  projects: [
    require.resolve('./jest.config.exercises'),
    require.resolve('./jest.config.final'),
  ],
  watchPlugins: [
    require.resolve('jest-watch-select-projects'),
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
  ],
}