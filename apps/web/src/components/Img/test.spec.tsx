import React from 'react';

import { render } from 'tests/test.utils';

import Img from './index';

describe('Img component', () => {
	it('should render correctly without isBordered prop', () => {
		const { container } = render(
			<Img src="https://i.pravatar.cc/150?id=50" alt="avatar placeholder" />
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render correctly with isBordered prop', () => {
		const { container } = render(
			<Img
				src="https://i.pravatar.cc/150?id=50"
				alt="avatar placeholder"
				isBordered
			/>
		);

		expect(container.firstChild).toMatchSnapshot();
	});
});
