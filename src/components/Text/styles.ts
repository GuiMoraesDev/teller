import styled, { css } from 'styled-components';

import { TextDefaultPropsThatMakeStyles } from '.';

interface TextProps extends TextDefaultPropsThatMakeStyles {
	tag?: string;
}

export const Text = styled.p.attrs<TextProps>(({ tag }) => ({
	as: tag,
}))<TextProps>`
	position: relative;

	padding: 0;
	margin: 0;

	width: ${({ fullWidth }) => fullWidth && '100%'};

	font-weight: ${({ isBold }) => isBold && 'bold'};

	${({ theme, dimension }) => theme.typography.variants[dimension || 'body2']};

	color: ${({ variant, theme }) =>
		variant === 'regular'
			? theme.themeColors.text
			: theme.themeColors.textLight};

	box-sizing: border-box;
`;
