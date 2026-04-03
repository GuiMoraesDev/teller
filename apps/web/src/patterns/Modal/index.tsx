import React, { forwardRef, useImperativeHandle, useState, useCallback, type PropsWithChildren } from 'react';

import clsx from 'clsx';
import { X } from 'phosphor-react';

import Button from 'components/Button';

export interface ModalHandles {
	openModal: () => void;
	closeModal: () => void;
}

interface ModalProps {
	startOpened?: boolean;
}

const Modal: React.ForwardRefRenderFunction<ModalHandles, PropsWithChildren<ModalProps>> = (
	{ children, startOpened },
	ref,
): JSX.Element => {
	const [visible, setVisible] = useState(!!startOpened);

	const openModal = useCallback(() => setVisible(true), []);
	const closeModal = useCallback(() => setVisible(false), []);

	useImperativeHandle(ref, () => ({ openModal, closeModal }));

	return (
		<div
			className={clsx(
				'absolute inset-0 flex items-center justify-center w-screen h-screen overflow-hidden bg-black/60 transition-all duration-200',
				visible ? 'opacity-100 visible' : 'opacity-0 invisible',
			)}
			data-testid="modal-container"
		>
			<main className="relative grid grid-rows-[3.6rem_auto] min-w-[8.0rem] min-h-[8.0rem] bg-canvas rounded-[0.4rem]">
				<header className="flex items-center justify-end">
					<Button
						IconLeft={<X />}
						onClick={closeModal}
						variant="neutral"
						dimension="xs"
						data-testid="close-button"
					/>
				</header>

				<section className="px-[0.8rem]" data-testid="modal-content">
					{children}
				</section>
			</main>
		</div>
	);
};

export default forwardRef(Modal);
