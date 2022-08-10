import api from './api';

export interface PostsDTO {
	userId: number;
	title: string;
	body: string;
}

export interface GetPostsResponse extends PostsDTO {
	id: number;
}

export const getPosts = async () => {
	const response = await api.get<GetPostsResponse[]>('/posts');

	return response;
};

export const postNewPost = async (data: PostsDTO) => {
	const response = await api.post('/posts', data);

	return response;
};
