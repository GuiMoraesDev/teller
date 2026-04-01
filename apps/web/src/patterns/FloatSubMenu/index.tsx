import { useCallback, useRef, useState, useEffect } from 'react';

import clsx from 'clsx';

interface Props {
	ActionComponent: JSX.Element;
	submenuComponents: JSX.Element[];
	isFullWidth?: boolean;
}

const FloatSubMenu = ({
	ActionComponent,
	submenuComponents,
	isFullWidth = false,
}: Props): JSX.Element => {
	const containerRef = useRef<HTMLDivElement>(null);
	const actionButtonRef = useRef<HTMLButtonElement>(null);
	const navContainerRef = useRef<HTMLDivElement>(null);

	const [visible, setVisible] = useState(false);

	const handleToggleSubmenu = useCallback(() => {
		setVisible((state) => !state);
	}, []);

	const handleClickOutside = useCallback((event: MouseEvent) => {
		const clickedOnActionButton = actionButtonRef.current?.contains(event.target as Node);
		const clickedOnNavContainer = navContainerRef.current?.contains(event.target as Node);

		if (!clickedOnActionButton && !clickedOnNavContainer) {
			setVisible(false);
		}
	}, []);

	useEffect(() => {
		if (visible) {
			document.addEventListener('mousedown', handleClickOutside);

			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
				setVisible(false);
			};
		}
	}, [visible, handleClickOutside]);

	return (
		<div
			data-testid="float-container"
			ref={containerRef}
			className={clsx(
				'relative flex place-content-center h-full',
				isFullWidth && 'w-full',
			)}
		>
			<button
				className="relative h-full border-none bg-transparent cursor-pointer"
				onClick={handleToggleSubmenu}
				ref={actionButtonRef}
				data-testid="action-button"
			>
				{ActionComponent}
			</button>

			<nav
				ref={navContainerRef}
				data-testid="nav-wrapper"
				className={clsx(
					'absolute bottom-0 left-1/2 bg-canvas-dark border border-border rounded-[0.4rem] shadow-regular -translate-x-[20%] translate-y-[calc(100%+0.8rem)]',
					'before:content-[""] before:absolute before:top-0 before:left-[33%] before:w-0 before:h-0 before:border-[0.8rem] before:border-solid before:border-transparent before:border-b-canvas-dark before:-translate-y-full',
					visible ? 'visible' : 'invisible',
				)}
			>
				{submenuComponents.map((Component) => Component)}
			</nav>
		</div>
	);
};

export default FloatSubMenu;
