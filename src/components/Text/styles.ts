import styled, { css } from "styled-components";

import { TextDefaultPropsThatMakeStyles } from ".";

interface TextProps extends TextDefaultPropsThatMakeStyles {
  tag?: string;
}

export const Text = styled.p.attrs<TextProps>(({ tag }) => ({
  as: tag,
}))<TextProps>`
  position: relative;

  padding: 0;
  margin: 0;

  box-sizing: border-box;

  ${({ variant, theme }) => {
    if (variant === "light")
      return css`
        color: ${theme.themeColors.textLight};
      `;

    if (variant === "lighter")
      return css`
        color: ${theme.themeColors.textLight};
      `;

    return css`
      color: ${theme.themeColors.text};
    `;
  }}

  ${({ fullWidth }) => {
    if (fullWidth)
      return css`
        width: 100%;
      `;
  }}

  ${({ dimension, theme }) => {
    if (dimension)
      return css`
        ${theme.typography.variants[dimension]};
      `;
  }}

  ${({ bold }) => {
    if (bold)
      return css`
        font-weight: bold;
      `;
  }}
`;
