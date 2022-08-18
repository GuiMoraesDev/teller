import React from 'react';

import { render } from 'tests/test.utils';

import LoginTemplate from './template';

const ContainerRender = (mockSubmit: jest.Mock<any, any>) =>
	render(<LoginTemplate onLoginSuccess={mockSubmit} />);

describe('Login page', () => {
	it('should render correctly', () => {
		const mockSubmit = jest.fn();

		const { container } = ContainerRender(mockSubmit);

		expect(container.firstChild).toMatchSnapshot();
	});
});
