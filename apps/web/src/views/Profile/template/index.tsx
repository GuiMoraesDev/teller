import type { UserProps } from '@types';
import { ArrowArcLeft } from 'phosphor-react';

import Button from 'components/Button';
import Img from 'components/Img';
import Text from 'components/Text';

import type { AllPostsProps } from 'services/posts.api';

interface Props {
	userData: UserProps;
	isLoading: boolean;
	postsData: AllPostsProps[];
}

const ProfileTemplate = ({
	userData,
	isLoading: _isLoading,
	postsData,
}: Props): JSX.Element => {
	return (
		<main className="flex flex-col p-[2.0rem] gap-[2.0rem] w-full max-w-[600px] h-full mx-auto overflow-y-auto">
			<div
				className="grid w-full gap-[1.2rem]"
				style={{
					gridTemplateColumns: '10rem 100%',
					gridTemplateAreas: "'Back .' 'AuthorMetadata AuthorMetadata'",
				}}
			>
				<Button
					IconLeft={<ArrowArcLeft />}
					label="Home"
					href="/home"
					variant="outline"
				/>

				<section style={{ gridArea: 'AuthorMetadata' }}>
					<Text label={`${userData.first_name}'s profile`} dimension="heading2" isBold />
				</section>
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

export default ProfileTemplate;
