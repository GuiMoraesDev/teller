import styled from 'styled-components';

export const Container = styled.div`
	display: grid;

	grid-template-columns: 1fr;
	grid-template-rows: 10rem auto;

	grid-template-areas:
		'Header'
		'Content';

	height: 100vh;
	width: 100vw;

	padding: ${({ theme }) => theme.sizes.dimensions.spacing.xl};

	@media ${({ theme }) => theme.breakpoints.laptop} {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto;

		grid-template-areas: 'Header Content';

		padding: 0;
	}
`;

export const Header = styled.header`
	grid-area: Header;

	display: flex;

	align-items: center;
	justify-content: center;

	height: 100%;

	@media ${({ theme }) => theme.breakpoints.laptop} {
		background-color: ${({ theme }) => theme.themeColors.brandPrimaryLight};
	}
`;

export const SignContent = styled.main`
	grid-area: Content;

	display: flex;

	flex-direction: column;

	align-items: center;
	justify-content: center;

	gap: ${({ theme }) => theme.sizes.dimensions.spacing.xl};
`;
