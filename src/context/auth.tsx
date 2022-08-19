import React, {
	createContext,
	useState,
	useEffect,
	useContext,
	PropsWithChildren,
	useCallback,
} from 'react';

import { LS_KEYS } from 'constant';

export interface UserProps {
	avatar_url: string;
	id: string;
	first_name: string;
	last_name: string;
	email: string;
}

interface AuthContextData {
	user: UserProps | null;
	setLoggedUser: (props: UserProps) => void;
	logoutUser: () => void;
}

const AuthContext = createContext<AuthContextData | null>(null);

const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
	const [data, setData] = useState<AuthContextData['user']>(null);

	useEffect(() => {
		const user = localStorage.getItem(LS_KEYS.user);

		if (user) {
			const parseduser: UserProps = JSON.parse(user);

			setData(parseduser);
		}
	}, []);

	const setLoggedUser = useCallback((props: UserProps) => {
		setData(props);

		localStorage.setItem(LS_KEYS.user, JSON.stringify(props));
	}, []);

	const logoutUser = useCallback(() => {
		setData(null);

		if (typeof window !== 'undefined') {
			localStorage.removeItem(LS_KEYS.user);
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user: data,
				setLoggedUser,
				logoutUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

function useAuth(): AuthContextData {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('DEV Alert: useAuth must be used whithin a AuthProvider');
	}

	return context;
}

export { AuthProvider, useAuth };
