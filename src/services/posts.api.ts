import { UserProps } from '@types';

import { Post, PostNewPostParams } from 'views/Home/@types';

import api from './api';

export interface GetPostsParams {
	author_id: UserProps['id'];
}

export interface AllPostsProps extends Post {
	users: {
		id: UserProps['id'];
		first_name: UserProps['first_name'];
		last_name: UserProps['last_name'];
		avatar_url: UserProps['avatar_url'];
	};
}

export const getAllPosts = async () => {
	const response = await api.get<AllPostsProps[]>('/posts');

	return response.data;
};

export const getUserPosts = async ({ author_id }: GetPostsParams) => {
	const response = await api.get<AllPostsProps[]>(`/posts/${author_id}`);

	return response.data;
};

export const postNewPost = async (data: PostNewPostParams) => {
	const response = await api.post<string>('/posts/new', data);

	return response.data;
};
