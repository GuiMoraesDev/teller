import React, { InputHTMLAttributes } from "react";

import { Warning } from "phosphor-react";
import { DefaultTheme } from "styled-components";

import Text from "components/Text";

import * as Styles from "./styles";

export interface InputDefaultPropsThatMakeStyles {
  dimension?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: keyof DefaultTheme["rounded"];
  isDisabled?: boolean;
  error?: string;
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
  required?: boolean;
  optional?: boolean;
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
    required = false,
    optional = true,
    handleOnChange,
    dimension = "md",
    rounded = "sm",
    className,
    ...props
  },
  ref
) => {
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
          <Text label={label} dimension="body1" />
        </Styles.Label>
      )}

      <Styles.InputContainer dimension={dimension} rounded={rounded}>
        <Styles.InputComponent
          placeholder={placeholder || "Type here..."}
          ref={ref}
          id={id}
          disabled={props.isDisabled}
          {...props}
          onChange={handleChangeValue}
        />
      </Styles.InputContainer>

      <Styles.ErrorMessage error={error}>
        <Warning />
        {error}
      </Styles.ErrorMessage>
    </Styles.Container>
  );
};

export default React.forwardRef(Input);
