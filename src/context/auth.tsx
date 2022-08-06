import React, {
	createContext,
	useState,
	useContext,
	PropsWithChildren,
	useCallback,
} from 'react';

export interface UserProps {
	avatar_url: string;
	id: number;
	name: string;
}

interface AuthContextData {
	user: UserProps | null;
	setLoggedUser: (props: UserProps) => void;
	logoutUser: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
	const [data, setData] = useState<AuthContextData['user']>(
		(): AuthContextData['user'] => {
			if (typeof window !== 'undefined') {
				const user = localStorage.getItem('User');

				if (user) {
					const parseduser: UserProps = JSON.parse(user);

					return parseduser;
				}
			}

			return null;
		}
	);

	const setLoggedUser = useCallback((props: UserProps) => {
		setData(props);

		if (typeof window !== 'undefined') {
			localStorage.setItem('User', JSON.stringify(props));
		}
	}, []);

	const logoutUser = useCallback(() => {
		setData(null);

		if (typeof window !== 'undefined') {
			localStorage.removeItem('User');
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

export async function getStaticProps(context: any) {
	console.log('context', context);

	return {
		props: {}, // will be passed to the page component as props
	};
}

export { AuthProvider, useAuth };
