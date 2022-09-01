import React from 'react';

import { render } from 'tests/test.utils';

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
	it('should render correctly', () => {
		const mockSubmit = jest.fn();

		const { container } = ContainerRender(mockSubmit);

		expect(container.firstChild).toMatchSnapshot();
	});
});
