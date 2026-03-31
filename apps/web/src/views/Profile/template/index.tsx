import { UserProps } from '@types';
import {ArrowArcLeft} from 'phosphor-react';

import Button from 'components/Button';
import Img from 'components/Img';
import Text from 'components/Text';

import { PrivateContent } from 'layouts/Private/styles';

import { AllPostsProps } from 'services/posts.api';

import * as Styles from './styles';

interface Props {
	userData: UserProps;
	isLoading: boolean;
	postsData: AllPostsProps[];
}

const HomeTemplate = ({
	userData,
	isLoading,
	postsData,
}: Props): JSX.Element => {
	return (
		<PrivateContent>
			<Styles.ProfileWrapper>
				<Button 
					IconLeft={<ArrowArcLeft />}
					label="Home"
					href="/home"
					variant='outline'
				/>

				<Styles.AuthorMetadata>
					<Text label={`${userData.first_name}'s profile`} dimension="heading2" isBold />
				</Styles.AuthorMetadata>
			</Styles.ProfileWrapper>
			<Styles.PostsWrapper>
				{Boolean(postsData.length) ? (
					postsData.map((post) => (
						<Styles.Post key={post.id}>
							<Styles.AvatarWrapper>
								<Img src={post.users.avatar_url} alt={post.users.first_name} />
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
