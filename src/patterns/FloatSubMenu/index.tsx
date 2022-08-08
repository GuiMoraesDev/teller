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
	const navContainerRef = useRef<HTMLDivElement>(null);

	const [visible, setVisible] = useState(false);

	const handleToggleSubmenu = useCallback(() => {
		setVisible((state) => !state);
	}, []);

	useEffect(() => {
		if (visible) {
			const handleClickOutside = (event: MouseEvent) => {
				if (!navContainerRef.current?.contains(event.target as Node)) {
					setVisible(false);
				}
			};

			document.addEventListener('mousedown', handleClickOutside);

			return () => {
				document.removeEventListener('mousedown', handleClickOutside);

				setVisible(false);
			};
		}
	}, [visible, navContainerRef]);

	return (
		<Styles.Container>
			<Styles.ActionButton onClick={handleToggleSubmenu}>
				{ActionComponent}
			</Styles.ActionButton>

			<Styles.NavWrapper isVisible={visible} ref={navContainerRef}>
				{submenuComponents.map((Component) => {
					return Component;
				})}
			</Styles.NavWrapper>
		</Styles.Container>
	);
};

export default FloatSubMenu;
