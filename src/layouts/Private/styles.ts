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

	display: flex;

	align-items: center;
	justify-content: space-between;

	width: 100%;

	padding: ${({ theme }) => theme.sizes.dimensions.spacing.xs};

	background-color: ${({ theme }) => theme.themeColors.brandPrimaryLight};
`;

export const AvatarWrapper = styled.button`
	height: 100%;

	border: none;
`;

export const Avatar = styled.img`
	height: 100%;

	border-radius: ${({ theme }) => theme.rounded.full};

	border: 3px solid ${({ theme }) => theme.themeColors.canvas};
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

	align-items: center;
	justify-content: space-between;

	width: 100%;

	padding: ${({ theme }) => theme.sizes.dimensions.spacing.xs};

	background-color: ${({ theme }) => theme.themeColors.brandPrimaryLight};
`;
