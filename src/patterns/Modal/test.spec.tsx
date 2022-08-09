import React from 'react';

import userEvent from '@testing-library/user-event';

import { render, waitFor } from 'tests/test.utils';

import Modal from './index';

const ContainerRender = (startOpened?: boolean) =>
	render(<Modal startOpened={startOpened} />);

const elementsTestId = {
	modalContainer: 'modal-container',
	closeButton: 'close-button',
	modalContent: 'modal-content',
};

describe('Modal pattern', () => {
	it('should render correctly', () => {
		const { container, getByTestId } = ContainerRender();

		const modalContainer = getByTestId(elementsTestId.modalContainer);
		const closeButton = getByTestId(elementsTestId.closeButton);
		const modalContent = getByTestId(elementsTestId.modalContent);

		expect(modalContainer).not.toBeVisible();
		expect(closeButton).not.toBeVisible();
		expect(modalContent).not.toBeVisible();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render Modal opened without user interaction', () => {
		const { getByTestId } = ContainerRender(true);

		const modalContainer = getByTestId(elementsTestId.modalContainer);
		const closeButton = getByTestId(elementsTestId.closeButton);
		const modalContent = getByTestId(elementsTestId.modalContent);

		expect(modalContainer).toBeVisible();
		expect(closeButton).toBeVisible();
		expect(modalContent).toBeVisible();
	});

	it('should close Modal on close button click', async () => {
		const { getByTestId } = ContainerRender(true);

		const closeButton = getByTestId(elementsTestId.closeButton);
		const modalContent = getByTestId(elementsTestId.modalContent);

		await waitFor(() => userEvent.click(closeButton));

		expect(modalContent).not.toBeVisible();
	});
});
