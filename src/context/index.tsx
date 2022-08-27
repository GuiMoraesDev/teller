import { PropsWithChildren } from 'react';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/themes';

import { AuthProvider } from './auth';
import { SignProvider } from './sign';

const GlobalAppProvider = ({
	children,
}: PropsWithChildren<{}>): JSX.Element => {
	const client = new QueryClient();

	return (
		<QueryClientProvider client={client}>
			<ThemeProvider theme={theme}>
				<AuthProvider>
					<SignProvider>{children}</SignProvider>
				</AuthProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
};

export default GlobalAppProvider;
