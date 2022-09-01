import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { UserProps } from '@types';
import nookies from 'nookies';
import { SignOut, UserGear } from 'phosphor-react';


import Avatar from 'components/Avatar';
import Button from 'components/Button';

import FloatSubMenu from 'patterns/FloatSubMenu';


export interface AvatarSubmenuProps {
	user: UserProps;
}

const AvatarSubmenu = ({ user }: AvatarSubmenuProps): JSX.Element | null => {
	const router = useRouter();

	const handleLogoutUser = useCallback(() => {
		google.accounts.id.disableAutoSelect();

		nookies.destroy(null, 'user');
		nookies.destroy(null, 'token');

		router.push('/signin');
	}, [router]);

	return (
		<FloatSubMenu
			ActionComponent={
				<Avatar
					src={user.avatar_url || ''}
					alt={user.first_name || ''}
					isBordered
				/>
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
