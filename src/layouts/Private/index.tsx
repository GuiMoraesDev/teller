import { PropsWithChildren } from 'react';

import { Activity, EnvelopeSimple, House, UserList } from 'phosphor-react';

import Button from 'components/Button';
import Logo from 'components/Logo';

import { useAuth } from 'context/auth';

import * as Styles from './styles';

const PrivateLayout = ({ children }: PropsWithChildren<{}>): JSX.Element => {
	const { user } = useAuth();

	return (
		<Styles.Container>
			<Styles.Header>
				<Styles.Avatar src={user?.avatar_url || ''} alt={user?.name || ''} />

				<Logo type="icon" />

				<Button IconLeft={<Activity />} variant="neutral" />
			</Styles.Header>

			{children}

			<Styles.Footer>
				<Button IconLeft={<House />} variant="neutral" />
				<Button IconLeft={<UserList />} variant="neutral" />
				<Button IconLeft={<EnvelopeSimple />} variant="neutral" />
			</Styles.Footer>
		</Styles.Container>
	);
};

export default PrivateLayout;