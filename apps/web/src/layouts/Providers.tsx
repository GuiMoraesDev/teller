import { type PropsWithChildren } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ToasterComponent from 'components/Toaster';

const queryClient = new QueryClient();

const Providers = ({ children }: PropsWithChildren) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ToasterComponent />
		</QueryClientProvider>
	);
};

export default Providers;
