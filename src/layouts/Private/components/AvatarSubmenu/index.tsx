import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { SignOut, UserGear } from 'phosphor-react';

import Avatar from 'components/Avatar';
import Button from 'components/Button';

import { useAuth } from 'context/auth';

import FloatSubMenu from 'patterns/FloatSubMenu';

const AvatarSubmenu = (): JSX.Element | null => {
	const router = useRouter();

	const { user, logoutUser } = useAuth();

	const handleLogoutUser = useCallback(() => {
		logoutUser();

		google.accounts.id.disableAutoSelect();

		router.push('/signin');
	}, [logoutUser, router]);

	return (
		<FloatSubMenu
			ActionComponent={
				<Avatar src={user?.avatar_url || ''} alt={user?.first_name || ''} isBordered />
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
