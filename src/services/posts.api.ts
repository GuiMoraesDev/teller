import axios from 'axios';

const api = axios.create({
	baseURL: "https://api.github.com",
});

export interface PostsDTO {
	userId: string;
	title: string;
	body: string;
}

export interface GetPostsResponse extends PostsDTO {
	id: string;
}

export const getPosts = async () => {
	const response = await api.get<GetPostsResponse[]>('/posts');

	return response;
};

export const postNewPost = async (data: PostsDTO) => {
	const response = await api.post('/posts', data);

	return response;
};
