import React, {
	createContext,
	useState,
	useEffect,
	useContext,
	PropsWithChildren,
	useCallback,
} from 'react';

export type GoogleCredentialsProps  = Omit<UserProps, 'id'>

import { UserProps } from './auth';

interface SignContextData {
	sign: GoogleCredentialsProps | null;
	setSaveUserData: (props: GoogleCredentialsProps) => void;
	clearSaveUserData: () => void;
}

const SignContext = createContext<SignContextData | null>(null);

const SignProvider = ({ children }: PropsWithChildren<{}>) => {
	const [data, setData] = useState<GoogleCredentialsProps | null>(null);

	const setSaveUserData = useCallback((props: GoogleCredentialsProps) => {
		setData(props);
	}, []);

	const clearSaveUserData = useCallback(() => {
		setData(null);
	}, []);

	return (
		<SignContext.Provider
			value={{
				sign: data,
				setSaveUserData,
				clearSaveUserData,
			}}
		>
			{children}
		</SignContext.Provider>
	);
};

function useSign(): SignContextData {
	const context = useContext(SignContext);

	if (!context) {
		throw new Error('DEV Alert: useSign must be used whithin a SignProvider');
	}

	return context;
}

export { SignProvider, useSign };
