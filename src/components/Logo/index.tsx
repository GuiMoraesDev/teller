import * as Styles from './styles';

interface Props {
	type?: 'icon' | 'logo';
}

const Logo = ({ type = 'icon' }: Props): JSX.Element => {
	return (
		<Styles.Logo
			src={
				type === 'icon'
					? 'img/icon.svg'
					: 'img/logo.svg'
			}
			alt={
				type === 'icon'
					? "Teller logo it's a microphone with sound waves around it and looks like a face blinking eyes"
					: "Teller logo it's a microphone with sound waves around it and looks like a face blinking eyes and Teller aside"
			}
		/>
	);
};

export default Logo;
