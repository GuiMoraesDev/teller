import { type ButtonHTMLAttributes, forwardRef, useCallback } from 'react';

import clsx from 'clsx';
import { Spinner } from 'phosphor-react';

export interface ButtonDefaultProps {
	label?: string;
	fullWidth?: boolean;
	variant?: 'primary' | 'secondary' | 'outline' | 'neutral' | 'alert';
	dimension?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
	disabled?: boolean;
	href?: string;
	onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
	IconLeft?: JSX.Element;
	IconRight?: JSX.Element;
	isLoading?: boolean;
	isCapitalize?: boolean;
}

export type ButtonProps = ButtonDefaultProps &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;

const dimensionClasses = {
	xs: 'h-[3.6rem] px-[0.8rem]',
	sm: 'h-[4.0rem] px-[1.2rem]',
	md: 'h-[4.4rem] px-[1.4rem]',
	lg: 'h-[4.8rem] px-[1.6rem]',
	xl: 'h-[5.6rem] px-[2.0rem]',
};

const roundedClasses = {
	none: 'rounded-none',
	sm: 'rounded-[0.4rem]',
	md: 'rounded-[1.0rem]',
	lg: 'rounded-[1.6rem]',
	full: 'rounded-full',
};

const variantClasses = {
	primary:
		'text-text-inverted bg-brand-primary border-brand-primary-dark hover:bg-brand-primary-dark',
	secondary:
		'text-text-inverted bg-canvas-inverted-light border-canvas-inverted hover:bg-canvas-inverted',
	outline:
		'text-text-primary bg-canvas border-canvas-inverted-light hover:text-text-inverted hover:bg-canvas-inverted',
	neutral:
		'text-text-primary bg-transparent border-transparent hover:underline',
	alert:
		'text-text-primary bg-danger-300 border-danger-500 hover:bg-danger-500',
};

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
		isLoading,
		isCapitalize,
		className,
		...props
	},
	ref,
): JSX.Element => {
	const isDisabled = Boolean(props.disabled) || Boolean(isLoading);

	const handleClick = useCallback(
		(event: React.MouseEvent<HTMLButtonElement>) => {
			if (isDisabled) return;

			if (href) {
				window.location.href = href;
				return;
			}

			return props.onClick?.(event);
		},
		[href, isDisabled, props],
	);

	return (
		<button
			className={clsx(
				'relative flex items-center justify-center border gap-[1.2rem] transition-colors duration-200 cursor-pointer',
				dimensionClasses[dimension],
				roundedClasses[rounded],
				isDisabled
					? 'text-neutral-500 bg-neutral-200 border-none cursor-not-allowed'
					: variantClasses[variant],
				fullWidth && 'w-full',
				isCapitalize && 'capitalize',
				'[&_svg]:text-inherit',
				className,
			)}
			onClick={handleClick}
			disabled={isDisabled}
			{...props}
			ref={ref}
		>
			{IconLeft}
			{label}
			{isLoading ? <Spinner className="animate-spin" /> : IconRight}
		</button>
	);
};

export default forwardRef(Button);
