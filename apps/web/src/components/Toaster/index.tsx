import { Toaster, type ToasterProps } from 'react-hot-toast';

const toastOptions: ToasterProps['toastOptions'] = {
	success: {
		iconTheme: {
			primary: '#507C59',
			secondary: '#D7E2D9',
		},
	},
	error: {
		iconTheme: {
			primary: '#E35226',
			secondary: '#F9DCD4',
		},
	},
};

const ToasterComponent = (): JSX.Element => {
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
