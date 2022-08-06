import { PropsWithChildren, useCallback, useRef } from 'react';

import { useRouter } from 'next/router';

import {
	Activity,
	EnvelopeSimple,
	House,
	SignOut,
	UserGear,
	UserList,
} from 'phosphor-react';

import Button from 'components/Button';
import Logo from 'components/Logo';

import { useAuth } from 'context/auth';

import Modal, { ModalHandles } from 'patterns/Modal';

import * as Styles from './styles';

const PrivateLayout = ({
	children,
}: PropsWithChildren<{}>): JSX.Element | null => {
	const router = useRouter();

	const { user, logoutUser } = useAuth();

	const userModalRef = useRef<ModalHandles>(null);

	const handleOpenModal = useCallback(() => {
		userModalRef.current?.openModal();
	}, []);

	const handleLogoutUser = useCallback(() => {
		logoutUser();

		router.push('/login');
	}, [logoutUser, router]);

	if (!user) {
		return null;
	}

	return (
		<>
			<Styles.Container>
				<Styles.Header>
					<Styles.AvatarWrapper onClick={handleOpenModal}>
						<Styles.Avatar
							src={user?.avatar_url || ''}
							alt={user?.name || ''}
						/>
					</Styles.AvatarWrapper>

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

			<Modal ref={userModalRef}>
				<Button IconLeft={<UserGear />} label="Profile" variant="neutral" />
				<Button
					IconLeft={<SignOut />}
					label="Logout"
					variant="neutral"
					onClick={handleLogoutUser}
				/>
			</Modal>
		</>
	);
};

export default PrivateLayout;
