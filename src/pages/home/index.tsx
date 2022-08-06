import { ReactElement } from 'react';

import { useAuth } from 'context/auth';

import PrivateLayout from 'layouts/Private';
import { PrivateContent } from 'layouts/Private/styles';

import * as Styles from './styles';

const Home = (): JSX.Element => {
	const { user } = useAuth();

	return (
		<PrivateContent>
			<strong>{user?.name}</strong>
		</PrivateContent>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <PrivateLayout>{page}</PrivateLayout>;
};

export default Home;
