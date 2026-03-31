import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { PropsWithChildren, useCallback } from 'react';

import { X } from 'phosphor-react';

import Button from 'components/Button';

import * as Styles from './styles';

export interface ModalHandles {
	openModal: () => void;
	closeModal: () => void;
}

interface ModalProps {
	startOpened?: boolean;
}

const Modal: React.ForwardRefRenderFunction<
	ModalHandles,
	PropsWithChildren<ModalProps>
> = ({ children, startOpened }, ref): JSX.Element => {
	const isStorybook = React.useMemo(() => process.env.IS_STORYBOOK, []);

	const [visible, setVisible] = useState(!!isStorybook || !!startOpened);

	const openModal = useCallback(() => {
		setVisible(true);
	}, []);

	const closeModal = useCallback(() => {
		setVisible(false);
	}, []);

	useImperativeHandle(ref, () => ({
		openModal,
		closeModal,
	}));

	return (
		<Styles.ModalContainer isVisible={visible} data-testid="modal-container">
			<Styles.ModalContentWrapper>
				<Styles.Header>
					<Button
						IconLeft={<X />}
						onClick={closeModal}
						variant="neutral"
						dimension="xs"
						data-testid="close-button"
					/>
				</Styles.Header>

				<Styles.ModalContent data-testid="modal-content">
					{children}
				</Styles.ModalContent>
			</Styles.ModalContentWrapper>
		</Styles.ModalContainer>
	);
};

export default forwardRef(Modal);
