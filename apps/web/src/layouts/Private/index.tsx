import { PropsWithChildren } from 'react';

import { Activity } from 'phosphor-react';

import Button from 'components/Button';
import Logo from 'components/Logo';

import AvatarSubMenu, { AvatarSubmenuProps } from './components/AvatarSubmenu';
import * as Styles from './styles';

type Props = AvatarSubmenuProps;

const PrivateLayout = ({
	children,
	user,
}: PropsWithChildren<Props>): JSX.Element | null => {
	return (
		<Styles.Container>
			<Styles.Header>
				<AvatarSubMenu user={user} />

				<Logo type="icon" />

				<Button IconLeft={<Activity />} variant="neutral" />
			</Styles.Header>

			{children}
		</Styles.Container>
	);
};

export default PrivateLayout;
