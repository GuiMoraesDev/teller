export interface Post {
	id: string;
	body: string;
	author_id: string;
	created_at: Date;
}

export interface PostNewPostParams {
	author_id: Post['author_id'];
	body: Post['body'];
}