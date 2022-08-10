import styled from 'styled-components';

export const Container = styled.div`
	display: grid;

	grid-template-columns: 1fr;
	grid-template-rows: 6rem 10fr 6rem;

	grid-template-areas:
		'NavHeader'
		'Content'
		'NavFooter';

	height: 100vh;
	width: 100vw;

	padding: ${({ theme }) => theme.sizes.dimensions.spacing.sm};

	@media ${({ theme }) => theme.breakpoints.laptop} {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 10fr 1fr;

		grid-template-areas:
			'NavHeader Content'
			'NavFooter NavFooter';
	}
`;

export const Header = styled.header`
	grid-area: NavHeader;

	position: fixed;

	top: 0;
	left: 0;
	right: 0;

	display: flex;

	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 6rem;

	padding: ${({ theme }) => theme.sizes.dimensions.spacing.xs};

	background-color: ${({ theme }) => theme.themeColors.brandPrimaryLight};

	z-index: 2;
`;

export const PrivateContent = styled.main`
	grid-area: Content;

	display: flex;

	flex-direction: column;

	align-items: center;
	justify-content: center;

	gap: ${({ theme }) => theme.sizes.dimensions.spacing.xl};
`;

export const Footer = styled.nav`
	grid-area: NavFooter;

	display: flex;

	position: fixed;

	bottom: 0;
	left: 0;
	right: 0;

	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 6rem;

	padding: ${({ theme }) => theme.sizes.dimensions.spacing.xs};

	background-color: ${({ theme }) => theme.themeColors.brandPrimaryLight};

	z-index: 2;
`;
