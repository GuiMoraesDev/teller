import styled from 'styled-components';

import { StyledProps } from '.';

export const AvatarWrapper = styled.span`
	height: 100%;

	border: none;
`;

export const Avatar = styled.img<StyledProps>`
	max-width: 100%;
	max-height: 100%;

	border-radius: ${({ theme }) => theme.rounded.full};

	border: ${({ theme, isBordered }) =>
		isBordered ? `3px solid ${theme.themeColors.canvas}` : 'none'};
`;
