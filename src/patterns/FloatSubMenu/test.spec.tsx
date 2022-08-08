import React from 'react';

import { render } from 'tests/test.utils';

import FloatSubMenu from './index';

describe('FloatSubMenu pattern', () => {
	it('should render correctly', () => {
		const { container } = render(
			<FloatSubMenu
				ActionComponent={<span>Controller</span>}
				submenuComponents={[
					<p key="menu-item-1">Menu item 1</p>,
					<p key="menu-item-2">Menu item 2</p>,
					<p key="menu-item-3">Menu item 3</p>,
				]}
			/>
		);

		expect(container.firstChild).toMatchSnapshot();
	});
});
