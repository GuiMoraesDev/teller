import React, { type InputHTMLAttributes } from 'react';

import clsx from 'clsx';
import { Warning, Eye, EyeClosed } from 'phosphor-react';

import Button from 'components/Button';
import Text from 'components/Text';

interface InputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	dimension?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
	isDisabled?: boolean;
	error?: string;
	PlaceholderIconLeft?: JSX.Element;
	label?: string;
	description?: string;
	isRequired?: boolean;
	handleOnChange?(value: string): void;
}

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

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputDefaultProps> = (
	{
		id,
		error,
		label,
		description: _description,
		type,
		placeholder,
		isRequired = false,
		handleOnChange,
		dimension = 'md',
		rounded = 'sm',
		className,
		PlaceholderIconLeft,
		isDisabled,
		...props
	},
	ref,
) => {
	const [currentType, setCurrentType] = React.useState(type || 'text');

	const handleToggleType = () => {
		setCurrentType((state) => (state === 'password' ? 'text' : 'password'));
	};

	const handleChangeValue = React.useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			props.onChange?.(event);
			handleOnChange?.(event.target.value);
		},
		[handleOnChange, props],
	);

	return (
		<div className={clsx('relative w-full', className)}>
			{label && (
				<label htmlFor={id}>
					<Text label={isRequired ? `${label} *` : label} dimension="body1" />
				</label>
			)}

			<label
				htmlFor={id}
				className={clsx(
					'relative flex items-center justify-center w-auto gap-[1.2rem] border border-border bg-canvas text-text-primary transition-[box-shadow,border-color] duration-200',
					dimensionClasses[dimension],
					roundedClasses[rounded],
					error && 'border-danger-500',
					!isDisabled && 'hover:border-border-inverted hover:shadow-short focus-within:border-border-inverted focus-within:shadow-short',
					error && !isDisabled && 'hover:border-alert-300 focus-within:border-alert-300',
					isDisabled && 'text-neutral-500 bg-neutral-200 border-none',
					'[&_svg]:text-neutral-400',
				)}
			>
				{PlaceholderIconLeft}

				<input
					className="outline-none w-full h-full bg-inherit text-inherit border-none rounded-[inherit]"
					placeholder={placeholder || 'Type here...'}
					ref={ref}
					id={id}
					disabled={isDisabled}
					{...props}
					onChange={handleChangeValue}
					type={currentType}
				/>

				{type === 'password' && (
					<Button
						IconLeft={currentType === 'password' ? <EyeClosed /> : <Eye />}
						onClick={handleToggleType}
						variant="neutral"
					/>
				)}
			</label>

			<span
				className={clsx(
					'absolute bottom-[0.2rem] left-0 right-0 flex items-center w-full text-[1.2rem] font-body leading-[1.6rem] mx-auto py-[1.2rem] px-[1.2rem] gap-[1.2rem] text-neutral-050 bg-danger-500 rounded-none rounded-b-[0.4rem] translate-y-full transition-opacity duration-500 z-5',
					error ? 'opacity-100' : 'opacity-0',
				)}
			>
				<Warning />
				{error}
			</span>
		</div>
	);
};

export default React.forwardRef(Input);
