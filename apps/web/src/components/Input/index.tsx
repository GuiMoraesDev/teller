import React, { InputHTMLAttributes } from 'react';

import { DimensionsProps } from '@types';
import { Warning, Eye, EyeClosed } from 'phosphor-react';
import { DefaultTheme } from 'styled-components';

import Button from 'components/Button';
import Text from 'components/Text';

import * as Styles from './styles';

export interface InputDefaultPropsThatMakeStyles {
	dimension?: keyof DimensionsProps;
	rounded?: keyof DefaultTheme['rounded'];
	isDisabled?: boolean;
	error?: string;
	PlaceholderIconLeft?: JSX.Element;
}

interface InputDefaultProps
	extends InputDefaultPropsThatMakeStyles,
		InputHTMLAttributes<HTMLInputElement> {
	id: string;
	placeholder?: string;
	className?: string;
	label?: string;
	description?: string;
	type?: string;
	isRequired?: boolean;
	handleOnChange?(value: string): void;
}

const Input: React.ForwardRefRenderFunction<
	HTMLInputElement,
	InputDefaultProps
> = (
	{
		id,
		error,
		label,
		description,
		type,
		placeholder,
		isRequired = false,
		handleOnChange,
		dimension = 'md',
		rounded = 'sm',
		className,
		PlaceholderIconLeft,
		...props
	},
	ref
) => {
	const [currentType, setCurrentType] = React.useState(type || 'text');

	const handleToggleType = () => {
		setCurrentType((state) => (state === 'password' ? 'text' : 'password'));
	};

	const handleChangeValue = React.useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			props.onChange?.(event);

			const { value } = event.target;

			handleOnChange?.(value);
		},
		[handleOnChange, props]
	);

	return (
		<Styles.Container className={className}>
			{label && (
				<Styles.Label htmlFor={id}>
					<Text label={isRequired ? `${label} *` : label} dimension="body1" />
				</Styles.Label>
			)}

			<Styles.InputContainer
				htmlFor={id}
				dimension={dimension}
				rounded={rounded}
			>
				{PlaceholderIconLeft}

				<Styles.InputComponent
					placeholder={placeholder || 'Type here...'}
					ref={ref}
					id={id}
					disabled={props.isDisabled}
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
			</Styles.InputContainer>

			<Styles.ErrorMessage error={error}>
				<Warning />
				{error}
			</Styles.ErrorMessage>
		</Styles.Container>
	);
};

export default React.forwardRef(Input);
