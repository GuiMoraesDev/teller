import { GetServerSideProps } from 'next';

import { UserProps } from '@types';
import nookies from 'nookies';

import SignLayout from 'layouts/Sign';

import SignInPage from 'views/Sign/signin.index';

const Page = () => (
	<SignLayout>
		<SignInPage />
	</SignLayout>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { user } = nookies.get(context);

	if (user) {
		return {
			redirect: {
				destination: '/home',
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
};

export default Page;
