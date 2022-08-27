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
	avatar_url?: string;
	id: string;
	first_name: string;
	last_name: string;
	email: string;
}

interface AuthContextData {
	user: UserProps | null;
	token: string | null;
	setLoggedUser: (props: DataProps) => void;
	logoutUser: () => void;
}

interface DataProps {
	user: AuthContextData['user'];
	token: AuthContextData['token'];
}

const AuthContext = createContext<AuthContextData | null>(null);

const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
	const [data, setData] = useState<DataProps | null>(null);

	useEffect(() => {
		const user = localStorage.getItem(LS_KEYS.user);
		const token = localStorage.getItem(LS_KEYS.token);

		if (user && token) {
			const parsedUser: UserProps = JSON.parse(user);
			const parsedToken: string = JSON.parse(token);

			setData({
				user: parsedUser,
				token: parsedToken,
			});
		}
	}, []);

	const setLoggedUser = useCallback((props: DataProps) => {
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
				user: data?.user || null,
				token: data?.token || null,
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
