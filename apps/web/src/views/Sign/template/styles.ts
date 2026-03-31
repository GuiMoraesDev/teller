import styled from 'styled-components';

export const FormWrapper = styled.form`
	display: flex;

	flex-direction: column;

	align-items: flex-start;
	justify-content: center;

	width: 100%;
	max-width: 75%;


	border-radius: ${({ theme }) => theme.rounded.sm};

	gap: ${({ theme }) => theme.sizes.dimensions.spacing.xl};
`;

export const ButtonsWrapper = styled.div`
	display: flex;

	align-items: center;
	justify-content: flex-end;

	width: 100%;
`;

export const SocialLinksWrapper = styled.div`
	display: flex;

	align-items: center;
	justify-content: center;

	min-width: ${({ theme }) => theme.sizes.partition['x1/2']};

	gap: ${({ theme }) => theme.sizes.dimensions.spacing.sm};

	margin: ${({ theme }) => theme.sizes.dimensions.spacing.sm} 0;
	padding: ${({ theme }) => theme.sizes.dimensions.spacing.sm} 0;

	border-top: ${({ theme }) => theme.borders.solid};
	border-bottom: ${({ theme }) => theme.borders.solid};
`;
