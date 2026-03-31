import React from 'react';

import { render } from 'tests/test.utils';

import Logo from './index';

describe('Logo component', () => {
	it('should render correctly type icon', () => {
		const { container } = render(<Logo type="icon" />);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render correctly type logo', () => {
		const { container } = render(<Logo type="logo" />);

		expect(container.firstChild).toMatchSnapshot();
	});
});
