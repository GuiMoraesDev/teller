import { useCallback, useState } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';
import { UserProps } from '@types';

import { AllPostsProps, getUserPosts } from 'services/posts.api';

import { QUERY_KEYS } from 'constant';

import ProfileTemplate from './template';

interface Props {
	user: UserProps;
}

const Profile = ({ user }: Props): JSX.Element => {
	const [posts, setPosts] = useState<AllPostsProps[]>([]);

	const loadPosts = useCallback(async () => {
		const postsData = await getUserPosts({
			author_id: user.id
		});

		setPosts(postsData);
	}, [user.id]);

	const query = useQuery([QUERY_KEYS.posts], loadPosts);

	return (
		<ProfileTemplate
		userData={user}
			isLoading={query.isLoading}
			postsData={posts}
		/>
	);
};

export default Profile;
