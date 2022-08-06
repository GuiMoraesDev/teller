import React, { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';

import CustomRouter from 'router';

import GlobalAppProvider from 'context';

import GlobalStyle from 'styles/global';

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const App = ({ Component, pageProps, router }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout || ((page) => page);

	return (
		<GlobalAppProvider>
			<Head>
				<meta name="theme-color" content="#06092B" />
				<link rel="shortcut icon" href="/img/icon-512.png" />
				<link rel="apple-touch-icon" href="/img/icon-512.png" />
			</Head>

			<NextSeo
				title="Teller - Let everyone know what do you think."
				description="Given voice to everyone"
				canonical="https://teller-six.vercel.app/"
				openGraph={{
					url: 'https://teller-six.vercel.app/',
					title: 'Teller - Let everyone know what do you think.',
					description: 'Given voice to everyone',
					images: [{ url: 'https://teller-six.vercel.app/img/cover.png' }],
					site_name: 'Teller',
					locale: 'en',
				}}
				twitter={{
					handle: '@GuiMoraesDev',
					site: '@site',
					cardType: 'summary_large_image',
				}}
			/>

			<CustomRouter router={router}>
				<GlobalStyle />
				{getLayout(<Component {...pageProps} />)}
			</CustomRouter>
		</GlobalAppProvider>
	);
};

export default App;
