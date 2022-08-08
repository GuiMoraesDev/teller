import { ReactElement } from 'react';

import { useAuth } from 'context/auth';

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

export default Home;
