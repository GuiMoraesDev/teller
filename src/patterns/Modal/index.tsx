import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { PropsWithChildren, useCallback } from 'react';

import { X } from 'phosphor-react';

import Button from 'components/Button';

import * as Styles from './styles';

export interface ModalHandles {
	openModal: () => void;
	closeModal: () => void;
}

const Modal: React.ForwardRefRenderFunction<
	ModalHandles,
	PropsWithChildren<{}>
> = ({ children }, ref): JSX.Element => {
	const isStorybook = React.useMemo(() => process.env.IS_STORYBOOK, []);

	const [visible, setVisible] = useState(!!isStorybook);

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
		<Styles.ModalContainer isVisible={visible}>
			<Styles.ModalContentWrapper>
				<Styles.Header>
					<Button
						IconLeft={<X />}
						onClick={closeModal}
						variant="neutral"
						dimension="xs"
					/>
				</Styles.Header>

				<Styles.ModalContent>{children}</Styles.ModalContent>
			</Styles.ModalContentWrapper>
		</Styles.ModalContainer>
	);
};

export default forwardRef(Modal);
