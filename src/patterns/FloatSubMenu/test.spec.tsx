import React from 'react';

import userEvent from '@testing-library/user-event';

import { render, waitFor } from 'tests/test.utils';

import FloatSubMenu from './index';

const ContainerRender = () =>
	render(
		<FloatSubMenu
			ActionComponent={<span>Controller</span>}
			submenuComponents={[
				<p key="menu-item-1">Menu item 1</p>,
				<p key="menu-item-2">Menu item 2</p>,
				<p key="menu-item-3">Menu item 3</p>,
			]}
		/>
	);

const elementsTestId = {
	floatContainer: 'float-container',
	actionButton: "action-button",
	navWrapper: "nav-wrapper"
};

describe('FloatSubMenu pattern', () => {
	it('should render correctly', () => {
		const { container, getByTestId } = ContainerRender();

		const floatContainer = getByTestId(elementsTestId.floatContainer);
		const actionButton = getByTestId(elementsTestId.actionButton);
		const navWrapper = getByTestId(elementsTestId.navWrapper);

		expect(floatContainer).toBeVisible();
		expect(actionButton).toBeVisible();
		expect(navWrapper).not.toBeVisible();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should open menu on action button click', async () => {
		const { getByTestId } = ContainerRender();

		const actionButton = getByTestId(elementsTestId.actionButton);
		const navWrapper = getByTestId(elementsTestId.navWrapper);

		await waitFor(() => userEvent.click(actionButton));

		expect(navWrapper).toBeVisible();
	});

	it('should close menu clicking on another element then action button or nav wrapper', async () => {
		const { getByTestId } = ContainerRender();

		const floatContainer = getByTestId(elementsTestId.floatContainer);
		const actionButton = getByTestId(elementsTestId.actionButton);
		const navWrapper = getByTestId(elementsTestId.navWrapper);

		await waitFor(() => userEvent.click(actionButton));

		expect(navWrapper).toBeVisible();

		await waitFor(() => userEvent.click(floatContainer));

		expect(navWrapper).not.toBeVisible();
	});

	it('should open and close menu clicking on action button', async () => {
		const { getByTestId } = ContainerRender();

		const floatContainer = getByTestId(elementsTestId.floatContainer);
		const actionButton = getByTestId(elementsTestId.actionButton);
		const navWrapper = getByTestId(elementsTestId.navWrapper);

		await waitFor(() => userEvent.click(actionButton));

		expect(navWrapper).toBeVisible();

		await waitFor(() => userEvent.click(actionButton));

		expect(navWrapper).not.toBeVisible();
	});
});
