import styled from 'styled-components';

export const AvatarWrapper = styled.span`
	height: 100%;

	border: none;
`;

export const Avatar = styled.img`
	height: 100%;

	border-radius: ${({ theme }) => theme.rounded.full};

	border: 3px solid ${({ theme }) => theme.themeColors.canvas};
`;
