import React, {
	createContext,
	useState,
	useContext,
	useCallback,
	PropsWithChildren,
} from 'react';

export interface UserProps {
	avatar_url: string;
	id: number;
	name: string;
}

interface AuthContextData {
	user: UserProps;
	setUser: (props: UserProps) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
	const [data, setData] = useState<UserProps>({} as UserProps);

	const setUser = useCallback((props: UserProps) => {
		setData(props);
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user: data,
				setUser,
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