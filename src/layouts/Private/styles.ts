import styled from 'styled-components';

export const Container = styled.div`
	display: grid;

	grid-template-columns: 1fr;
	grid-template-rows: 6rem auto;

	grid-template-areas:
		'NavHeader'
		'Content';

	height: 100vh;
	width: 100vw;

	@media ${({ theme }) => theme.breakpoints.laptop} {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 10fr 1fr;

		grid-template-areas: 'NavHeader Content';
	}
`;

export const Header = styled.header`
	grid-area: NavHeader;

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

	padding: ${({ theme }) => theme.sizes.dimensions.spacing.sm};

	gap: ${({ theme }) => theme.sizes.dimensions.spacing.xl};
`;
