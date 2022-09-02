import { useCallback, useState } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';
import { UserProps } from '@types';

import { AllPostsProps, getAllPosts, postNewPost } from 'services/posts.api';

import { QUERY_KEYS } from 'constant';

import HomeTemplate from './template';
import { HomeResolverProps } from './template/validations';

interface Props {
	user: UserProps;
}

const Home = ({ user }: Props): JSX.Element => {
	const [posts, setPosts] = useState<AllPostsProps[]>([]);

	const loadPosts = useCallback(async () => {
		const postsData = await getAllPosts();

		setPosts(postsData);
	}, []);

	const query = useQuery([QUERY_KEYS.posts], loadPosts);

	const mutation = useMutation([QUERY_KEYS.posts], postNewPost, {
		onSuccess: () => query.refetch(),
	});

	const onSubmit = useCallback(
		({ body }: HomeResolverProps) => {
			mutation.mutate({
				author_id: user.id,
				body,
			});
		},
		[mutation, user.id]
	);

	return (
		<HomeTemplate
			onPostSubmit={onSubmit}
			isLoading={query.isLoading}
			postsData={posts}
		/>
	);
};

export default Home;
