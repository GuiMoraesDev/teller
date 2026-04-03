import React, { type HTMLAttributes, forwardRef } from 'react';

import clsx from 'clsx';
import { Warning } from 'phosphor-react';

import Text from 'components/Text';

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
	id: string;
	dimension?: 'sm' | 'md';
	rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
	isDisabled?: boolean;
	fullWidth?: boolean;
	error?: string;
	label?: string;
	maxLength?: number;
	required?: boolean;
	optional?: boolean;
}

const dimensionClasses = {
	sm: 'h-[9.6rem] text-[1.2rem] leading-[1.6rem]',
	md: 'h-[19.2rem] text-[1.2rem] leading-[1.6rem]',
};

const roundedClasses = {
	none: 'rounded-none',
	sm: 'rounded-[0.4rem]',
	md: 'rounded-[1.0rem]',
	lg: 'rounded-[1.6rem]',
	full: 'rounded-full',
};

const TextArea: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
	{
		id,
		error,
		dimension = 'md',
		rounded = 'sm',
		isDisabled = false,
		maxLength = 1000,
		label,
		required: _required = false,
		optional: _optional = true,
		placeholder,
		fullWidth,
		...props
	},
	ref,
) => {
	const [charCounter, setCharCounter] = React.useState(0);

	const onContentChange = React.useCallback(
		(event: React.FormEvent<HTMLTextAreaElement>) => {
			props.onChange?.(event);
			setCharCounter(event.currentTarget.value.length);
		},
		[props],
	);

	return (
		<div className={clsx('relative', fullWidth ? 'w-full' : 'w-full')}>
			{label && (
				<label htmlFor={id}>
					<Text label={label} dimension="body1" />
				</label>
			)}

			<div
				className={clsx(
					'relative w-full p-[1.6rem] bg-canvas border border-border transition-[border-color,box-shadow] duration-200 hover:border-neutral-400 hover:shadow-short',
					dimensionClasses[dimension],
					roundedClasses[rounded],
					isDisabled && 'bg-neutral-200 text-neutral-500',
					error && 'border-alert-500',
				)}
			>
				<textarea
					id={id}
					ref={ref}
					className="w-full h-[85%] p-0 text-text-primary bg-canvas border-none resize-none outline-none text-[1.2rem] font-body leading-[1.6rem]"
					placeholder={placeholder || 'Type here...'}
					maxLength={maxLength}
					{...props}
					onChange={(event) => onContentChange(event)}
				/>

				<Text label={`${charCounter} / ${maxLength}`} />

				<span
					className={clsx(
						'absolute bottom-[0.2rem] left-0 right-0 flex items-center w-full text-[1.2rem] font-body leading-[1.6rem] mx-auto py-[0.6rem] px-[1.2rem] text-neutral-000 bg-alert-500 rounded-none rounded-b-[0.4rem] translate-y-full transition-opacity duration-500 z-0',
						'[&_svg]:mr-[0.5rem]',
						error ? 'opacity-100' : 'opacity-0',
					)}
					data-testid="error-alert"
				>
					<Warning />
					{error}
				</span>
			</div>
		</div>
	);
};

export default forwardRef(TextArea);
