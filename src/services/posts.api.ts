import { Post, PostNewPostParams } from 'views/Home/@types';

import { UserProps } from 'context/auth';

import api from './api';

export interface GetPostsParams {
	author_id: UserProps['id'];
}

export interface AllPostsProps extends Post {
	Users: {
		id: UserProps['id'];
		first_name: UserProps['first_name'];
		last_name: UserProps['last_name'];
		avatar_url: UserProps['avatar_url'];
	};
}

export const getPosts = async ({ author_id }: GetPostsParams) => {
	const response = await api.get<AllPostsProps[]>(`/posts/${author_id}`);

	return response.data;
};

export const postNewPost = async (data: PostNewPostParams) => {
	const response = await api.post<string>('/posts/new', data);

	return response.data;
};
