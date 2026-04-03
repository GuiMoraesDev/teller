/** @type {import('jest').Config} */
module.exports = {
	moduleDirectories: ['node_modules', '<rootDir>/src'],
	testEnvironment: 'jest-environment-jsdom',
	testPathIgnorePatterns: ['/node_modules/'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
	transform: {
		'^.+\\.tsx?$': ['ts-jest', {
			tsconfig: {
				jsx: 'react-jsx',
				baseUrl: './src',
				verbatimModuleSyntax: false,
				paths: {
					'@types': ['./src/@types'],
					'components/*': ['./src/components/*'],
					'constant': ['./src/constant'],
					'constant/*': ['./src/constant/*'],
					'helpers/*': ['./src/helpers/*'],
					'layouts/*': ['./src/layouts/*'],
					'patterns/*': ['./src/patterns/*'],
					'services/*': ['./src/services/*'],
					'views/*': ['./src/views/*'],
				},
			},
		}],
	},
	moduleNameMapper: {
		'^@types$': '<rootDir>/src/@types',
		'^components/(.*)$': '<rootDir>/src/components/$1',
		'^constant$': '<rootDir>/src/constant',
		'^constant/(.*)$': '<rootDir>/src/constant/$1',
		'^helpers/(.*)$': '<rootDir>/src/helpers/$1',
		'^layouts/(.*)$': '<rootDir>/src/layouts/$1',
		'^patterns/(.*)$': '<rootDir>/src/patterns/$1',
		'^services/(.*)$': '<rootDir>/src/services/$1',
		'^views/(.*)$': '<rootDir>/src/views/$1',
		'^styles/(.*)$': '<rootDir>/src/styles/$1',
	},
};
