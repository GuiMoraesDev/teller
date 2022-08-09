import React from 'react';

import userEvent from '@testing-library/user-event';

import { render, waitFor } from 'tests/test.utils';

import LoginTemplate from './template';

const ContainerRender = (mockSubmit: jest.Mock<any, any>) =>
	render(<LoginTemplate onSubmit={mockSubmit} isLoading={false} />);

const elementsTestId = {
	submitButton: 'submit-button',
	usernameInput: "username-input"
};

describe('FloatSubMenu pattern', () => {
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
		const usernameInput = getByTestId(elementsTestId.usernameInput);

		await waitFor(async () => {
			await userEvent.type(usernameInput, "my-username");
			await userEvent.click(submitButton);
		});

		expect(mockSubmit).toBeCalledTimes(1);
	});
});
