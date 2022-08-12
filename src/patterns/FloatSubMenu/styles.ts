import styled, { css } from 'styled-components';

import { StyledProps } from '.';

export const Container = styled.div<StyledProps>`
	position: relative;

	display: flex;

	place-content: center;

	height: 100%;

	${({ isFullWidth }) =>
		isFullWidth &&
		css`
			width: 100%;
		`};
`;

export const ActionButton = styled.button`
	position: relative;

	height: 100%;

	border: none;
`;

interface NavWrapperProps {
	parentWidth?: number;
	isVisible: boolean;
}

export const NavWrapper = styled.nav<NavWrapperProps>`
	position: absolute;

	bottom: 0;
	left: 50%;

	background-color: ${({ theme }) => theme.themeColors.canvasDark};

	border: ${({ theme }) => theme.borders.solid};
	border-radius: ${({ theme }) => theme.rounded.sm};

	box-shadow: ${({ theme }) => theme.shadows.regular};

	transform: translate(
		-20%,
		calc(100% + ${({ theme }) => theme.sizes.common.x2})
	);

	visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};

	:before {
		content: '';

		position: absolute;

		top: 0;
		left: calc(${({ parentWidth }) => parentWidth}px / 3);

		width: 0;
		height: 0;

		border: ${({ theme }) => theme.borders.solid};
		border-width: ${({ theme }) => theme.sizes.common.x2};
		border-color: transparent;
		border-bottom-color: ${({ theme }) => theme.themeColors.canvasDark};

		transform: translateY(-100%);
	}
`;
