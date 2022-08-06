import { ButtonHTMLAttributes, forwardRef, useCallback } from 'react';

import { useRouter } from 'next/router';

import { DimensionsProps } from '@types';
import { DefaultTheme } from 'styled-components';

import * as Styles from './styles';

export interface ButtonDefaultPropsThatMakeStyles {
	fullWidth?: boolean;
	variant?: 'primary' | 'secondary' | 'outline' | 'neutral' | 'alert';
	dimension?: keyof DimensionsProps;
	rounded?: keyof DefaultTheme['rounded'];
	isDisabled: boolean;
	IconLeft?: JSX.Element;
	IconRight?: JSX.Element;
}

interface ButtonDefaultProps
	extends Omit<ButtonDefaultPropsThatMakeStyles, 'isDisabled'> {
	label?: string;
	disabled?: boolean;
	href?: string;
	onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

export type ButtonProps = ButtonDefaultProps &
	ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
	{
		label,
		variant = 'primary',
		IconLeft,
		IconRight,
		fullWidth = false,
		dimension = 'md',
		rounded = 'sm',
		href,
		...props
	},
	ref
): JSX.Element => {
	const navigate = useRouter();

	const handleClick = useCallback(
		(event: React.MouseEvent<HTMLButtonElement>) => {
			if (href) {
				return navigate.push(href);
			}

			return props.onClick?.(event);
		},
		[href, navigate, props]
	);

	return (
		<Styles.Button
			fullWidth={fullWidth}
			dimension={dimension}
			rounded={rounded}
			variant={variant}
			onClick={handleClick}
			isDisabled={Boolean(props.disabled)}
			{...props}
			ref={ref}
		>
			{IconLeft}

			{label}

			{IconRight}
		</Styles.Button>
	);
};

export default forwardRef(Button);
