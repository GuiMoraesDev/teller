import { useForm } from 'react-hook-form';

import { ChatDots } from 'phosphor-react';

import Avatar from 'components/Avatar';
import Button from 'components/Button';
import Text from 'components/Text';
import TextArea from 'components/TextArea';

import { PrivateContent } from 'layouts/Private/styles';

import { GetPostsResponse } from 'services/posts/posts.api';

import { HomeSchemaProps } from '../@types';
import * as Styles from './styles';
import { homeResolver } from './validations';

interface Props {
	onPostSubmit: (props: HomeSchemaProps) => void;
	isLoading: boolean;
	postsData: GetPostsResponse[];
}

const HomeTemplate = ({
	onPostSubmit,
	isLoading,
	postsData,
}: Props): JSX.Element => {
	const homeMethods = useForm<HomeSchemaProps>({
		resolver: homeResolver,
	});

	return (
		<PrivateContent>
			<Styles.PostsFormWrapper>
				<Styles.PostsForm
					id="post-message"
					onSubmit={homeMethods.handleSubmit(onPostSubmit)}
				>
					<TextArea
						id="post-message-input"
						data-testid="post-message-input"
						placeholder="What’s happening?"
						error={homeMethods.formState.errors.postMessage?.message}
						fullWidth
						{...homeMethods.register('postMessage')}
					/>
				</Styles.PostsForm>

				<Button
					label="Tell"
					type="submit"
					form="post-message"
					data-testid="submit-button"
					IconRight={<ChatDots />}
					isLoading={isLoading}
				/>
			</Styles.PostsFormWrapper>

			<Styles.PostsWrapper>
				{postsData.map((post) => (
					<Styles.Post key={post.id}>
						<Styles.AvatarWrapper>
							<Avatar src={`https://i.pravatar.cc/300`} alt={post.title} />
						</Styles.AvatarWrapper>

						<Styles.AuthorMetadata>
							<Text label={post.title} isBold />
						</Styles.AuthorMetadata>

						<Styles.PostMessage>
							<Text label={post.body} />
						</Styles.PostMessage>
					</Styles.Post>
				))}
			</Styles.PostsWrapper>
		</PrivateContent>
	);
};

export default HomeTemplate;
