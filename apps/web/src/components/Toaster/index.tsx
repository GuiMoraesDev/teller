import { Toaster, ToasterProps } from 'react-hot-toast';

import { useTheme } from 'styled-components';

const ToasterComponent = (): JSX.Element => {
	const theme = useTheme();

	const toastOptions: ToasterProps['toastOptions'] = {
		success: {
			iconTheme: {
				primary: theme.colors.success[500],
				secondary: theme.colors.success[100],
			},
		},
		error: {
			iconTheme: {
				primary: theme.colors.danger[500],
				secondary: theme.colors.danger[100],
			},
		},
	};

	return (
		<Toaster
			position="top-right"
			gutter={12}
			reverseOrder
			toastOptions={toastOptions}
		/>
	);
};

export default ToasterComponent;
