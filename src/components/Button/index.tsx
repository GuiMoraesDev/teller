import { ButtonHTMLAttributes, forwardRef, useCallback } from "react";

import * as Icons from "phosphor-react";
import { DefaultTheme } from "styled-components";

import * as Styles from "./styles";
import { useRouter } from "next/router";

export interface ButtonDefaultPropsThatMakeStyles {
  fullWidth?: boolean;
  variant?: "primary" | "secondary" | "outline" | "neutral" | "alert";
  dimension?: "xs" | "sm" | "md" | "lg" | "xl" | "square";
  rounded?: keyof DefaultTheme["rounded"];
  isDisabled: boolean;
  iconLeft?: keyof typeof Icons;
  iconRight?: keyof typeof Icons;
}

interface ButtonDefaultProps
  extends Omit<ButtonDefaultPropsThatMakeStyles, "isDisabled"> {
  label?: string;
  disabled?: boolean;
  href?: string;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

type IconProps = React.ForwardRefExoticComponent<
  Icons.IconProps & React.RefAttributes<SVGSVGElement>
> | null;

export type ButtonProps = ButtonDefaultProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    label,
    variant = "primary",
    iconLeft,
    iconRight,
    fullWidth = false,
    dimension = "md",
    rounded = "sm",
    href,
    ...props
  },
  ref
): JSX.Element => {
  const IconLeftComponent = (iconLeft ? Icons[iconLeft] : null) as IconProps;
  const IconRightComponent = (iconRight ? Icons[iconRight] : null) as IconProps;

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

  const hasNoLabel = dimension === "square" || !label;

  return (
    <Styles.Button
      fullWidth={fullWidth}
      dimension={hasNoLabel ? "square" : dimension}
      rounded={rounded}
      variant={variant}
      onClick={handleClick}
      isDisabled={Boolean(props.disabled)}
      {...props}
      ref={ref}
    >
      {IconLeftComponent && (
        <IconLeftComponent
          className={`left-icon ${hasNoLabel ? "no-label" : ""}`}
        />
      )}
      {dimension !== "square" && label}
      {IconRightComponent && (
        <IconRightComponent
          className={`right-icon ${hasNoLabel ? "no-label" : ""}`}
        />
      )}
    </Styles.Button>
  );
};

export default forwardRef(Button);
