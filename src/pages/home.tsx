import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { UserProps } from '@types';
import nookies from 'nookies';

import PrivateLayout from 'layouts/Private';

import HomePage from 'views/Home';

import api from 'services/api';

type ServerSideProps = GetServerSideProps<{
	user: UserProps;
}>;

const Page = ({ user }: InferGetServerSidePropsType<ServerSideProps>) => {
	return (
		<PrivateLayout user={user}>
			<HomePage user={user} />
		</PrivateLayout>
	);
};

export const getServerSideProps: ServerSideProps = async (context) => {
	const { user: cookiesUser } = nookies.get(context);

	if (!cookiesUser) {
		return {
			redirect: {
				destination: '/signin',
				permanent: false,
			},
		};
	}

	const user = JSON.parse(cookiesUser) as UserProps;

	return {
		props: { user },
	};
};

export default Page;
