import styled, { css } from "styled-components";

import { TextAreaDefaultPropsThatMakeStyles, TextAreaProps } from ".";

export const Container = styled.div`
  position: relative;

  width: ${({ theme }) => theme.sizes.partition["x1/1"]};
`;

export const Label = styled.label``;

interface ErrorMessageProps {
  error?: string;
}

export const ErrorMessage = styled.span<ErrorMessageProps>`
  position: absolute;
  bottom: ${({ theme }) => theme.sizes.common["x0.5"]};
  right: ${({ theme }) => theme.sizes.common.x0};
  left: ${({ theme }) => theme.sizes.common.x0};

  display: flex;

  align-items: center;

  width: ${({ theme }) => theme.sizes.partition["x1/1"]};

  ${({ theme }) => theme.typography.variants.body3};

  margin: auto;
  padding: ${({ theme }) =>
    `${theme.sizes.common["x1.5"]} ${theme.sizes.common.x3}`};

  color: ${({ theme }) => theme.colors.neutrals["000"]};
  background-color: ${({ theme }) => theme.colors.alert["500"]};

  border-radius: 0;
  border-bottom-left-radius: ${({ theme }) => theme.rounded.sm};
  border-bottom-right-radius: ${({ theme }) => theme.rounded.sm};

  opacity: ${({ error }) => (error ? 1 : 0)};
  transform: translateY(100%);
  transition: opacity 0.5s ease-in-out;

  z-index: 0;

  svg {
    margin-right: 0.5rem;
  }
`;

export const ContainerTextArea = styled.div<TextAreaDefaultPropsThatMakeStyles>`
  position: relative;

  width: ${({ theme }) => theme.sizes.partition["x1/1"]};

  padding: ${({ theme }) => theme.sizes.common.x4};

  background-color: ${({ theme }) => theme.themeColors.canvas};

  border: ${({ theme }) => theme.borders.solid};
  border-radius: ${({ theme }) => theme.rounded.sm};

  transition: border-color ${({ theme }) => theme.transition.fast},
    box-shadow ${({ theme }) => theme.transition.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.neutrals[400]};
    box-shadow: ${({ theme }) => theme.shadows.short};
  }

  ${({ theme, rounded }) => {
    return css`
      border-radius: ${theme.rounded[rounded || "none"]};
    `;
  }}

  ${({ dimension, theme }) => {
    if (dimension === "sm")
      return css`
        ${theme.typography.variants.body3};

        height: ${theme.sizes.common.x24};
      `;

    if (dimension === "md")
      return css`
        ${theme.typography.variants.body3};

        height: ${theme.sizes.common.x48};
      `;

    if (dimension === "lg")
      return css`
        ${theme.typography.variants.body2};

        height: ${theme.sizes.common.x64};
      `;
  }}

  ${({ theme, isDisabled }) => {
    if (isDisabled)
      return css`
        background-color: ${theme.colors.neutrals[200]};
        color: ${theme.colors.neutrals[500]};
        box-shadow: 0 0 0 1px ${theme.colors.neutrals[200]};

        &:hover {
          background-color: ${theme.colors.neutrals[200]};
          color: ${theme.colors.neutrals[500]};
        }
      `;
  }}

  ${({ theme, error }) => {
    if (error)
      return css`
        border-color: ${theme.colors.alert["500"]};
      `;
  }}
`;

export const TextAreaComponent = styled.textarea<TextAreaProps>`
  width: ${({ theme }) => theme.sizes.partition["x1/1"]};
  height: 85%;

  padding: 0;

  color: ${({ theme }) => theme.themeColors.text};
  background-color: ${({ theme }) => theme.themeColors.canvas};

  border: none;

  resize: none;

  ${({ dimension, theme }) => {
    if (dimension === "sm")
      return css`
        ${theme.typography.variants.body3};
      `;

    if (dimension === "md")
      return css`
        ${theme.typography.variants.body3};
      `;

    if (dimension === "lg")
      return css`
        ${theme.typography.variants.body2};
      `;
  }}
`;
