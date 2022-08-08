import styled from 'styled-components';

export const Container = styled.div`
	position: relative;

	height: 100%;
`;

export const ActionButton = styled.button`
	position: relative;

	height: 100%;

	border: none;
`;

interface NavWrapperProps {
	isVisible: boolean;
}

export const NavWrapper = styled.nav<NavWrapperProps>`
	position: absolute;

	bottom: 0;
	left: 0;

	background-color: ${({ theme }) => theme.themeColors.canvasDark};

	border: ${({ theme }) => theme.borders.solid};
	border-radius: ${({ theme }) => theme.rounded.sm};

	box-shadow: ${({ theme }) => theme.shadows.regular};

	transform: translateY(calc(100% + ${({ theme }) => theme.sizes.common.x2}));

	visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};

	:before {
		content: '';

		position: absolute;

		top: 0;
		left: 0;

		width: 0;
		height: 0;

		border: ${({ theme }) => theme.borders.solid};
		border-width: ${({ theme }) => theme.sizes.common.x2};
		border-color: transparent;
		border-bottom-color: ${({ theme }) => theme.themeColors.canvasDark};

		transform: translate(100%, -100%);
	}
`;
