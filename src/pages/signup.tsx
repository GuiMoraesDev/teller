import { GetServerSideProps } from 'next';

import { UserProps } from '@types';
import nookies from 'nookies';

import SignLayout from 'layouts/Sign';

import SignUpPage from 'views/Sign/signup.index';

const Page = () => (
	<SignLayout>
		<SignUpPage />
	</SignLayout>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { user: cookiesUser } = nookies.get(context);

	const user = JSON.parse(cookiesUser) as UserProps | null;

	if (user !== null) {
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
