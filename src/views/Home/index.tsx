import { useCallback, useState } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';

import { useAuth } from 'context/auth';

import { AllPostsProps, getPosts, postNewPost } from 'services/posts.api';

import { QUERY_KEYS } from 'constant';

import HomeTemplate from './template';
import { HomeResolverProps } from './template/validations';

const Home = (): JSX.Element => {
	const { user } = useAuth();

	const [posts, setPosts] = useState<AllPostsProps[]>([]);

	const loadPosts = useCallback(async () => {
		const postsData = await getPosts({
			author_id: user?.id || '',
		});

		setPosts(postsData);
	}, [user?.id]);

	const query = useQuery([QUERY_KEYS.posts], loadPosts);

	const mutation = useMutation([QUERY_KEYS.posts], postNewPost, {
		onSuccess: () => query.refetch(),
	});

	const onSubmit = useCallback(
		({ body }: HomeResolverProps) => {
			if (!user?.id) {
				throw new Error('author id is required');
			}

			mutation.mutate({
				author_id: user?.id,
				body,
			});
		},
		[mutation, user?.id]
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
