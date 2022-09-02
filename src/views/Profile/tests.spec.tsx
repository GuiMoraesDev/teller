/* cSpell: disable */

import React from 'react';

import { render } from 'tests/test.utils';

import ProfileTemplate from './template';

const ContainerRender = (mockSubmit: jest.Mock<any, any>) =>
	render(
		<ProfileTemplate
			userData={{
				id: 'jest_id',
				email: 'example@email.com',
				first_name: 'John',
				last_name: 'Doe',
			}}
			isLoading={false}
			postsData={[]}
		/>
	);

describe('Profile page', () => {
	it('should render correctly', () => {
		const mockSubmit = jest.fn();

		const { container } = ContainerRender(mockSubmit);

		expect(container.firstChild).toMatchSnapshot();
	});
});
