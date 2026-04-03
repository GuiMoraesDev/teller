import { type HTMLAttributes } from 'react';

import clsx from 'clsx';

type TypographyVariant =
	| 'display1'
	| 'heading1'
	| 'heading2'
	| 'heading3'
	| 'heading4'
	| 'heading5'
	| 'body1'
	| 'body2'
	| 'body3'
	| 'body4';

interface TextProps extends HTMLAttributes<HTMLElement> {
	label: string;
	fullWidth?: boolean;
	dimension?: TypographyVariant;
	variant?: 'regular' | 'light';
	isBold?: boolean;
	isCapitalize?: boolean;
}

const tagMap: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
	display1: 'strong',
	heading1: 'h1',
	heading2: 'h2',
	heading3: 'h3',
	heading4: 'h4',
	heading5: 'h5',
	body1: 'p',
	body2: 'p',
	body3: 'p',
	body4: 'p',
};

const typographyClasses: Record<TypographyVariant, string> = {
	display1: 'text-[4.8rem] font-heading font-medium leading-[8.0rem]',
	heading1: 'text-[3.6rem] font-heading font-medium leading-[5.6rem]',
	heading2: 'text-[2.4rem] font-heading font-medium leading-[4.0rem]',
	heading3: 'text-[2.0rem] font-heading font-medium leading-[3.2rem]',
	heading4: 'text-[1.6rem] font-heading font-medium leading-[2.4rem]',
	heading5: 'text-[1.4rem] font-heading font-medium leading-[2.0rem]',
	body1: 'text-[1.6rem] font-body font-normal leading-[2.4rem]',
	body2: 'text-[1.4rem] font-body font-normal leading-[2.0rem]',
	body3: 'text-[1.2rem] font-body font-normal leading-[1.6rem]',
	body4: 'text-[1.0rem] font-body font-normal leading-[1.2rem]',
};

const Text = ({
	label,
	variant = 'regular',
	fullWidth = false,
	dimension = 'body2',
	isBold,
	isCapitalize,
	className,
	...props
}: TextProps): JSX.Element => {
	const Tag = tagMap[dimension];

	return (
		<Tag
			className={clsx(
				'relative p-0 m-0',
				typographyClasses[dimension],
				variant === 'regular' ? 'text-text-primary' : 'text-text-light',
				fullWidth && 'w-full',
				isBold && 'font-bold',
				isCapitalize && 'capitalize',
				className,
			)}
			{...props}
		>
			{label}
		</Tag>
	);
};

export default Text;
