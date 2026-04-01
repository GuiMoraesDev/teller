import { useEffect, useState, type ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface Props {
	className?: string;
	el?: string;
	children: ReactNode;
}

const Portal = ({
	children,
	className = 'react-portal',
	el = 'div',
}: Props) => {
	const [container] = useState(() => document.createElement(el));

	if (className) container.classList.add(className);

	useEffect(() => {
		document.body.appendChild(container);

		return () => {
			document.body.removeChild(container);
		};
	}, [container]);

	return ReactDOM.createPortal(children, container);
};

export default Portal;
