import styled, { css, keyframes } from 'styled-components';

import { ButtonDefaultPropsThatMakeStyles } from '.';

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const Button = styled.button<ButtonDefaultPropsThatMakeStyles>`
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
	height: ${({ theme, dimension }) =>
		theme.sizes.dimensions.height[dimension || 'md']};

	border: ${({ theme }) => theme.borders.solid};
	border-radius: ${({ theme, rounded }) => theme.rounded[rounded || 'none']};

	margin: 0;
	padding: 0
		${({ theme, dimension }) =>
			theme.sizes.dimensions.spacing[dimension || 'md']};
	gap: ${({ theme }) => theme.sizes.dimensions.spacing.sm};

	transition: background-color ${({ theme }) => theme.transition.fast},
		color ${({ theme }) => theme.transition.fast};

	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.themeColors.brandPrimaryLight};
	}

	svg {
		color: inherit;
	}

	${({ variant, theme }) => {
		if (variant === 'primary')
			return css`
				color: ${theme.themeColors.textInverted};

				background-color: ${theme.themeColors.brandPrimary};

				border-color: ${theme.themeColors.brandPrimaryDark};

				&:hover {
					background-color: ${theme.themeColors.brandPrimaryDark};
				}
			`;

		if (variant === 'secondary')
			return css`
				color: ${theme.themeColors.textInverted};

				background-color: ${theme.themeColors.canvasInvertedLight};

				border-color: ${theme.themeColors.canvasInverted};

				&:hover {
					background-color: ${theme.themeColors.canvasInverted};
				}
			`;

		if (variant === 'outline')
			return css`
				color: ${theme.themeColors.text};

				background-color: ${theme.themeColors.canvas};

				border-color: ${theme.themeColors.canvasInvertedLight};

				&:hover {
					color: ${theme.themeColors.textInverted};

					background-color: ${theme.themeColors.canvasInverted};
				}
			`;

		if (variant === 'neutral')
			return css`
				color: ${theme.themeColors.text};

				background-color: ${theme.colors.transparent};

				border-color: transparent;

				&:hover {
					text-decoration: underline;

					color: ${theme.themeColors.text};

					background-color: ${theme.colors.transparent};
				}
			`;

		if (variant === 'alert')
			return css`
				color: ${theme.themeColors.text};

				background-color: ${theme.colors.danger[300]};

				border-color: ${theme.colors.danger[500]};

				&:hover {
					background-color: ${theme.colors.danger[500]};
				}
			`;
	}}

	${({ theme, isDisabled }) => {
		if (isDisabled)
			return css`
				color: ${theme.colors.neutrals[500]};

				background-color: ${theme.colors.neutrals[200]};

				border: ${theme.borders.none};

				&:hover {
					color: ${theme.colors.neutrals[500]};

					background-color: ${theme.colors.neutrals[200]};
				}
			`;
	}}

	.spin {
		animation-name: ${rotate};
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
`;
