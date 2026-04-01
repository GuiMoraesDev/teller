import React from 'react';

import { render } from 'tests/test.utils';

jest.mock('components/GoogleSign', () => ({
	__esModule: true,
	default: ({ id }: { id: string }) => <div id={id} data-testid="google-sign-mock" />,
}));

import SignTemplate from './template';

const ContainerRender = (mockSubmit: jest.Mock<any, any>) =>
	render(
		<SignTemplate
			buttonLabel="Jest test"
			buttonHref="/"
			isLoading={false}
			pageType="sign in"
			onSubmit={mockSubmit}
		/>
	);

describe('Login page', () => {
	it.skip('should render correctly', () => {
		const mockSubmit = jest.fn();

		const { container } = ContainerRender(mockSubmit);

		expect(container.firstChild).toMatchSnapshot();
	});
});
