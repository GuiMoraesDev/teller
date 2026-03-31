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

	overflow: hidden;
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

	padding: ${({ theme }) => theme.sizes.dimensions.spacing.xl};

	gap: ${({ theme }) => theme.sizes.dimensions.spacing.xl};

	width: 100%;
	max-width: 600px;
	height: 100%;

	margin: auto;

	overflow-y: auto;
`;
