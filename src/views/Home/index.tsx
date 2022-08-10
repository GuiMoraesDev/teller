import { ReactElement, useCallback, useState } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';

import { useAuth } from 'context/auth';

import {
	getPosts,
	postNewPost,
	GetPostsResponse,
} from 'services/posts/posts.api';

import { QUERY_KEYS } from 'constant';

import { HomeSchemaProps } from './@types';
import HomeTemplate from './template';

const Home = (): JSX.Element => {
	const { user } = useAuth();

	const [posts, setPosts] = useState<GetPostsResponse[]>([]);

	const mutation = useMutation(postNewPost, {
		onSuccess: (response) => {
			setPosts((state) => ({
				...state,
				...response.data,
			}));
		},
	});

	const loadPosts = useCallback(async () => {
		const response = await getPosts();

		setPosts(response.data);
	}, []);

	const { isLoading } = useQuery([QUERY_KEYS.posts], loadPosts);

	const onSubmit = useCallback(
		(values: HomeSchemaProps) => {
			const { postMessage } = values;

			mutation.mutate({
				userId: user?.id || 0,
				title: user?.name || '',
				body: postMessage,
			});
		},
		[mutation, user?.id, user?.name]
	);

	return (
		<HomeTemplate
			onPostSubmit={onSubmit}
			isLoading={mutation.isLoading || isLoading}
			postsData={posts}
		/>
	);
};

export default Home;
