import styled from 'styled-components';

export const Container = styled.div`
	display: flex;

	flex-direction: column;

	align-items: center;
	justify-content: space-between;

	min-height: 100vh;
	min-width: 100vw;

	padding: ${({ theme }) => theme.sizes.dimensions.spacing.xl};
`;

export const Header = styled.header`
	display: flex;

	place-content: center;

	width: 100%;
`;

export const ContentWrapper = styled.main`
	display: flex;

	flex-direction: column;

	align-items: center;

	gap: ${({ theme }) => theme.sizes.dimensions.spacing.xl};
`;

export const Footer = styled.footer``;
