import { useForm } from 'react-hook-form';

import { ChatDots } from 'phosphor-react';

import Button from 'components/Button';
import Img from 'components/Img';
import Text from 'components/Text';
import TextArea from 'components/TextArea';

import logYupErrors from 'helpers/logYupErrors';

import type { AllPostsProps } from 'services/posts.api';

import { POST_MESSAGE_LENGTH } from 'constant';

import { homeResolver, type HomeResolverProps } from './validations';

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
		<main className="flex flex-col p-[2.0rem] gap-[2.0rem] w-full max-w-[600px] h-full mx-auto overflow-y-auto">
			<div className="flex flex-col items-end justify-center w-full gap-[1.2rem]">
				<form
					id="post-body"
					className="w-full"
					onSubmit={homeMethods.handleSubmit(onPostSubmit, logYupErrors)}
				>
					<TextArea
						id="post-body-input"
						data-testid="post-body-input"
						placeholder="What's happening?"
						error={homeMethods.formState.errors.body?.message}
						fullWidth
						{...homeMethods.register('body')}
						maxLength={POST_MESSAGE_LENGTH}
					/>
				</form>

				<Button
					label="Tell"
					type="submit"
					form="post-body"
					data-testid="submit-button"
					IconRight={<ChatDots />}
					isLoading={isLoading}
				/>
			</div>

			<div className="grid grid-cols-1 w-full gap-[1.4rem] mb-auto">
				{postsData.length ? (
					postsData.map((post) => (
						<div
							key={post.id}
							className="grid grid-cols-[6rem_auto] grid-rows-[2rem_auto] w-full h-full border border-border rounded-[0.4rem] p-[1.2rem]"
							style={{ gridTemplateAreas: "'Avatar AuthorMetadata' 'Avatar PostMessage'" }}
						>
							<div className="w-full h-full pr-[0.8rem]" style={{ gridArea: 'Avatar' }}>
								<Img src={post.users.avatar_url} alt={post.users.first_name} />
							</div>

							<section style={{ gridArea: 'AuthorMetadata' }}>
								<Text
									label={`${post.users.first_name} ${post.users.last_name}`}
									isBold
								/>
							</section>

							<section style={{ gridArea: 'PostMessage' }}>
								<Text label={post.body} />
							</section>
						</div>
					))
				) : (
					<div className="flex items-center justify-center h-full w-full">
						You have no posts yet
					</div>
				)}
			</div>
		</main>
	);
};

export default HomeTemplate;
