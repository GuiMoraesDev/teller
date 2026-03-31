import { useForm } from 'react-hook-form';

import { ChatDots } from 'phosphor-react';

import Button from 'components/Button';
import Img from 'components/Img';
import Text from 'components/Text';
import TextArea from 'components/TextArea';

import logYupErrors from 'helpers/logYupErrors';

import { PrivateContent } from 'layouts/Private/styles';

import { AllPostsProps } from 'services/posts.api';

import { POST_MESSAGE_LENGTH } from 'constant';

import * as Styles from './styles';
import { homeResolver, HomeResolverProps } from './validations';

interface Props {
	onPostSubmit: (props: HomeResolverProps) => void;
	isLoading: boolean;
	postsData: AllPostsProps[];
}

const HomeTemplate = ({
	onPostSubmit,
	isLoading,
	postsData,
}: Props): JSX.Element => {
	const homeMethods = useForm<HomeResolverProps>({
		resolver: homeResolver,
	});

	return (
		<PrivateContent>
			<Styles.PostsFormWrapper>
				<Styles.PostsForm
					id="post-body"
					onSubmit={homeMethods.handleSubmit(onPostSubmit, logYupErrors)}
				>
					<TextArea
						id="post-body-input"
						data-testid="post-body-input"
						placeholder="What’s happening?"
						error={homeMethods.formState.errors.body?.message}
						fullWidth
						{...homeMethods.register('body')}
						maxLength={POST_MESSAGE_LENGTH}
					/>
				</Styles.PostsForm>

				<Button
					label="Tell"
					type="submit"
					form="post-body"
					data-testid="submit-button"
					IconRight={<ChatDots />}
					isLoading={isLoading}
				/>
			</Styles.PostsFormWrapper>

			<Styles.PostsWrapper>
				{Boolean(postsData.length) ? (
					postsData.map((post) => (
						<Styles.Post key={post.id}>
							<Styles.AvatarWrapper>
								<Img
									src={post.users.avatar_url}
									alt={post.users.first_name}
								/>
							</Styles.AvatarWrapper>

							<Styles.AuthorMetadata>
								<Text
									label={`${post.users.first_name} ${post.users.last_name}`}
									isBold
								/>
							</Styles.AuthorMetadata>

							<Styles.PostMessage>
								<Text label={post.body} />
							</Styles.PostMessage>
						</Styles.Post>
					))
				) : (
					<Styles.Empty>You have no posts yet</Styles.Empty>
				)}
			</Styles.PostsWrapper>
		</PrivateContent>
	);
};

export default HomeTemplate;
