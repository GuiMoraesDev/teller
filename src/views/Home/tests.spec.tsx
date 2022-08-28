/* cSpell: disable */

import React from 'react';

import userEvent from '@testing-library/user-event';

import { render, waitFor } from 'tests/test.utils';

import HomeTemplate from './template';

const ContainerRender = (mockSubmit: jest.Mock<any, any>) =>
	render(
		<HomeTemplate onPostSubmit={mockSubmit} isLoading={false} postsData={[]} />
	);

const elementsTestId = {
	postMessageInput: 'post-message-input',
	submitButton: 'submit-button',
};

describe('Home page', () => {
	it('should render correctly', () => {
		const mockSubmit = jest.fn();

		const { container } = ContainerRender(mockSubmit);

		expect(container.firstChild).toMatchSnapshot();
	});
});
