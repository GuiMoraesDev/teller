import styled, { css } from 'styled-components';

import { InputDefaultPropsThatMakeStyles } from '.';

export const Container = styled.div`
	position: relative;

	width: ${({ theme }) => theme.sizes.partition['x1/1']};
`;

export const Label = styled.label``;

export const InputContainer = styled.label<InputDefaultPropsThatMakeStyles>`
	position: relative;

	display: flex;

	align-items: center;
	justify-content: center;

	width: auto;
	height: ${({ theme, dimension }) =>
		theme.sizes.dimensions.height[dimension || 'md']};

	color: ${({ theme }) => theme.themeColors.text};
	background-color: ${({ theme }) => theme.themeColors.canvas};

	border: ${({ theme }) => theme.borders.solid};
	border-color: ${({ theme, error }) => error && theme.colors.danger['500']};
	border-radius: ${({ theme, rounded }) => theme.rounded[rounded || 'none']};

	margin: 0;
	padding: 0
		${({ theme, dimension }) =>
			theme.sizes.dimensions.spacing[dimension || 'md']};
	gap: ${({ theme }) => theme.sizes.dimensions.spacing.sm};

	transition: box-shadow ${({ theme }) => theme.transition.fast},
		border-color ${({ theme }) => theme.transition.fast};

	&:hover,
	&:focus-within {
		border-color: ${({ theme, error }) =>
			error ? theme.colors.alert[300] : theme.themeColors.borderInverted};
		box-shadow: ${({ theme }) => theme.shadows.short};
	}

	svg {
		color: ${({ theme }) => theme.colors.neutrals['400']};
	}

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
`;

export const InputComponent = styled.input`
	outline: none;

	width: 100%;
	height: 100%;

	color: inherit;
	background-color: inherit;

	border: none;
	border-radius: inherit;
`;

interface ErrorMessageProps {
	error?: string;
}

export const ErrorMessage = styled.span<ErrorMessageProps>`
	position: absolute;

	bottom: ${({ theme }) => theme.sizes.common['x0.5']};
	right: ${({ theme }) => theme.sizes.common.x0};
	left: ${({ theme }) => theme.sizes.common.x0};

	display: flex;

	align-items: center;

	width: ${({ theme }) => theme.sizes.partition['x1/1']};

	${({ theme }) => theme.typography.variants.body3};

	margin: auto;
	padding: ${({ theme }) => theme.sizes.dimensions.spacing.sm};
	gap: ${({ theme }) => theme.sizes.dimensions.spacing.sm};

	color: ${({ theme }) => theme.colors.neutrals['050']};
	background-color: ${({ theme }) => theme.colors.danger['500']};

	border-radius: ${({ theme }) => theme.rounded.none};
	border-bottom-left-radius: ${({ theme }) => theme.rounded.sm};
	border-bottom-right-radius: ${({ theme }) => theme.rounded.sm};

	opacity: ${({ error }) => (error ? 1 : 0)};
	transform: translateY(100%);
	transition: opacity 0.5s ease-in-out;

	z-index: 5;
`;
