import React, { PropsWithChildren, ReactElement } from "react";

import "jest-styled-components";

import { render, RenderOptions } from "@testing-library/react";

import "@testing-library/jest-dom";
import GlobalAppProvider from "context";

const AllTheProviders = ({ children }: PropsWithChildren<{}>) => {
  return (
    <GlobalAppProvider>{children} </GlobalAppProvider>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
