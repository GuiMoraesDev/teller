import type { UserProps } from '@types';
import { Activity } from 'phosphor-react';

import Button from 'components/Button';
import Logo from 'components/Logo';

import AvatarSubMenu from './Private/components/AvatarSubmenu';

interface Props {
	user: UserProps;
}

const PrivateHeader = ({ user }: Props) => {
	return (
		<header className="flex items-center justify-between w-full h-[6rem] px-[0.8rem] bg-brand-primary-light z-[2]">
			<AvatarSubMenu user={user} />
			<Logo type="icon" />
			<Button IconLeft={<Activity />} variant="neutral" />
		</header>
	);
};

export default PrivateHeader;
