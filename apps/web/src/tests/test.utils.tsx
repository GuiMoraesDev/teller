import React, { type PropsWithChildren, type ReactElement } from 'react';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { render, type RenderOptions } from '@testing-library/react';

import '@testing-library/jest-dom';

const AllTheProviders = ({ children }: PropsWithChildren) => {
	const client = new QueryClient();

	return (
		<QueryClientProvider client={client}>
			{children}
		</QueryClientProvider>
	);
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
	render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
