import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { SignOut, UserGear } from 'phosphor-react';

import Button from 'components/Button';

import { useAuth } from 'context/auth';

import FloatSubMenu from 'patterns/FloatSubMenu';

import * as Styles from './styles';

const AvatarSubmenu = (): JSX.Element | null => {
	const router = useRouter();

	const { user, logoutUser } = useAuth();

	const handleLogoutUser = useCallback(() => {
		logoutUser();

		router.push('/login');
	}, [logoutUser, router]);

	return (
		<FloatSubMenu
			ActionComponent={
				<Styles.AvatarWrapper>
					<Styles.Avatar src={user?.avatar_url || ''} alt={user?.name || ''} />
				</Styles.AvatarWrapper>
			}
			submenuComponents={[
				<Button
					IconLeft={<UserGear />}
					key="profile-button"
					label="Profile"
					variant="neutral"
				/>,
				<Button
					IconLeft={<SignOut />}
					key="logout-button"
					label="Logout"
					variant="neutral"
					onClick={handleLogoutUser}
				/>,
			]}
		/>
	);
};

export default AvatarSubmenu;
