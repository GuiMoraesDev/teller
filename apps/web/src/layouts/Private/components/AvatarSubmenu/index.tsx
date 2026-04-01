import { useCallback } from 'react';

import type { UserProps } from '@types';
import { SignOut, UserGear } from 'phosphor-react';

import Button from 'components/Button';
import Img from 'components/Img';

import { deleteCookie } from 'helpers/cookies';

import FloatSubMenu from 'patterns/FloatSubMenu';

export interface AvatarSubmenuProps {
	user: UserProps;
}

const AvatarSubmenu = ({ user }: AvatarSubmenuProps): JSX.Element | null => {
	const handleLogoutUser = useCallback(() => {
		google.accounts.id.disableAutoSelect();

		deleteCookie('user');
		deleteCookie('token');

		window.location.href = '/signin';
	}, []);

	return (
		<FloatSubMenu
			ActionComponent={
				<Img
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
					href={`/profile/${user.id}`}
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
