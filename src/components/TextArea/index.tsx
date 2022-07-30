import React, { HTMLAttributes, forwardRef } from "react";

import { Warning } from "phosphor-react";
import { DefaultTheme } from "styled-components";

import Text from "components/Text";

import * as Styles from "./styles";

export interface TextAreaDefaultPropsThatMakeStyles {
  dimension?: "sm" | "md";
  rounded?: keyof DefaultTheme["rounded"];
  isDisabled?: boolean;
  error?: string;
}

export interface TextAreaProps
  extends TextAreaDefaultPropsThatMakeStyles,
    HTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
  maxLength?: number;
  required?: boolean;
  optional?: boolean;
}

const TextArea: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = (
  {
    id,
    error,
    dimension = "md",
    rounded = "sm",
    isDisabled = false,
    maxLength = 1000,
    label,
    required = false,
    optional = true,
    placeholder,
    ...props
  },
  ref
) => {
  const [charCounter, setCharCounter] = React.useState(0);

  const onContentChange = React.useCallback(
    (event: React.FormEvent<HTMLTextAreaElement>) => {
      props.onChange?.(event);

      setCharCounter(event.currentTarget.value.length);
    },
    [props]
  );

  return (
    <Styles.Container>
      {label && (
        <Styles.Label htmlFor={id}>
          <Text label={label} dimension="body1" />
        </Styles.Label>
      )}
      <Styles.ContainerTextArea
        error={error}
        dimension={dimension}
        rounded={rounded}
        isDisabled={isDisabled}
      >
        <Styles.TextAreaComponent
          id={id}
          ref={ref}
          placeholder={placeholder || "Type here..."}
          maxLength={maxLength}
          dimension={dimension}
          {...props}
          onChange={(event) => onContentChange(event)}
        />

        <Text label={`${charCounter} / ${maxLength}`} />

        <Styles.ErrorMessage error={error} data-testid="error-alert">
          <Warning />
          {error}
        </Styles.ErrorMessage>
      </Styles.ContainerTextArea>
    </Styles.Container>
  );
};

export default forwardRef(TextArea);
