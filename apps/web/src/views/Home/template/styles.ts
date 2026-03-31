import styled from 'styled-components';

export const PostsFormWrapper = styled.div`
	display: flex;

	flex-direction: column;

	align-items: flex-end;
	justify-content: center;

	width: 100%;

	gap: ${({ theme }) => theme.sizes.dimensions.spacing.sm};
`;

export const PostsForm = styled.form`
	width: 100%;
`;

export const PostsWrapper = styled.div`
	display: grid;

	grid-template-columns: 1fr;

	width: 100%;

	gap: ${({ theme }) => theme.sizes.dimensions.spacing.md};

	margin-bottom: auto;
`;

export const Post = styled.div`
	display: grid;

	grid-template-columns: 6rem auto;
	grid-template-rows: 2rem auto;

	grid-template-areas:
		'Avatar AuthorMetadata'
		'Avatar PostMessage';

	width: 100%;
	height: 100%;

	border: ${({ theme }) => theme.borders.solid};
	border-radius: ${({ theme }) => theme.rounded.sm};

	padding: ${({ theme }) => theme.sizes.dimensions.spacing.sm};
`;

export const AvatarWrapper = styled.div`
	grid-area: Avatar;

	width: 100%;
	height: 100%;

	padding-right: ${({ theme }) => theme.sizes.dimensions.spacing.xs};
`;

export const AuthorMetadata = styled.section`
	grid-area: AuthorMetadata;
`;

export const PostMessage = styled.section`
	grid-area: PostMessage;
`;

export const Empty = styled.div`
	display: flex;

	align-items: center;
	justify-content: center;

	height: 100%;
	width: 100%;
`;
