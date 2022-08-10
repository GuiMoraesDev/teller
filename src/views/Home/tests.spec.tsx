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

	it('should not call submit form function without type a username', async () => {
		const mockSubmit = jest.fn();

		const { getByTestId } = ContainerRender(mockSubmit);

		const submitButton = getByTestId(elementsTestId.submitButton);

		await waitFor(() => userEvent.click(submitButton));

		expect(mockSubmit).toBeCalledTimes(0);
	});

	it('should call submit form function with username filled', async () => {
		const mockSubmit = jest.fn();

		const { getByTestId } = ContainerRender(mockSubmit);

		const submitButton = getByTestId(elementsTestId.submitButton);
		const postMessageInput = getByTestId(elementsTestId.postMessageInput);

		await waitFor(async () => {
			await userEvent.type(
				postMessageInput,
				'Dolore incididunt nisi enim eu do aliqua sit labore voluptate aliqua.'
			);
			await userEvent.click(submitButton);
		});

		expect(mockSubmit).toBeCalledTimes(1);
	});
});
