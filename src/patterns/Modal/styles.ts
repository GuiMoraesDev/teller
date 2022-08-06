import styled from 'styled-components';

interface ModalContainerProps {
	isVisible: boolean;
}

export const ModalContainer = styled.div<ModalContainerProps>`
	position: absolute;

	top: 0;
	bottom: 0;
	right: 0;
	left: 0;

	display: flex;

	align-items: center;
	justify-content: center;

	width: 100vw;
	height: 100vh;

	overflow: hidden;

	background-color: rgba(0, 0, 0, 0.6);

	transition: all ${({ theme }) => theme.transition.fast};

	opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
	visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

export const ModalContentWrapper = styled.main`
	position: relative;

	display: grid;

	grid-template-rows: ${({ theme }) => theme.sizes.dimensions.height.xs} auto;

	min-width: ${({ theme }) => theme.sizes.common.x20};
	min-height: ${({ theme }) => theme.sizes.common.x20};

	background-color: ${({ theme }) => theme.themeColors.canvas};

	border-radius: ${({ theme }) => theme.rounded.sm};
`;

export const Header = styled.header`
	display: flex;

	align-items: center;
	justify-content: flex-end;
`;

export const ModalContent = styled.section`
	padding: ${({ theme }) => theme.sizes.dimensions.spacing.xs};
`;
