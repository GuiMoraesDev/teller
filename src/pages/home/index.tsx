import { useAuth } from 'context/auth';

import * as Styles from './styles';

const Home = (): JSX.Element => {
	const { user } = useAuth();

	return (
		<Styles.Container>
			<strong>{user?.name}</strong>
		</Styles.Container>
	);
};

export default Home;
