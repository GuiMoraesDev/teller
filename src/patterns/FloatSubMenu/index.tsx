import { useCallback, useRef, useState, useEffect } from 'react';

import * as Styles from './styles';

interface Props {
	ActionComponent: JSX.Element;
	submenuComponents: JSX.Element[];
}

const FloatSubMenu = ({
	ActionComponent,
	submenuComponents,
}: Props): JSX.Element => {
	const actionButtonRef = useRef<HTMLButtonElement>(null);
	const navContainerRef = useRef<HTMLDivElement>(null);

	const [visible, setVisible] = useState(false);

	const handleToggleSubmenu = useCallback(() => {
		setVisible((state) => !state);
	}, []);

	const handleClickOutside = useCallback((event: MouseEvent) => {
		const clickedOnActionButton = actionButtonRef.current?.contains(
			event.target as Node
		);
		const clickedOnNavContainer = navContainerRef.current?.contains(
			event.target as Node
		);

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
		<Styles.Container data-testid="float-container">
			<Styles.ActionButton
				onClick={handleToggleSubmenu}
				ref={actionButtonRef}
				data-testid="action-button"
			>
				{ActionComponent}
			</Styles.ActionButton>

			<Styles.NavWrapper
				isVisible={visible}
				ref={navContainerRef}
				data-testid="nav-wrapper"
			>
				{submenuComponents.map((Component) => {
					return Component;
				})}
			</Styles.NavWrapper>
		</Styles.Container>
	);
};

export default FloatSubMenu;
