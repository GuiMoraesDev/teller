import React from 'react';

import { render } from 'tests/test.utils';

import SignTemplate from './template';

const ContainerRender = (mockSubmit: jest.Mock<any, any>) =>
	render(
		<SignTemplate
			type="signin"
			title="Welcome to Teller"
			description="Use one social link above to sign in"
			handleLoginSuccess={mockSubmit}
			buttonProps={{
				label: 'Jest test',
			}}
		/>
	);

describe('Login page', () => {
	it('should render correctly', () => {
		const mockSubmit = jest.fn();

		const { container } = ContainerRender(mockSubmit);

		expect(container.firstChild).toMatchSnapshot();
	});
});
