import Image, { ImageProps } from 'next/image';

import LogoIcon from 'assets/images/icon.svg';
import LogoImage from 'assets/images/logo.svg';

interface Props {
	type?: 'icon' | 'logo';
}

const Logo = ({ type = 'icon' }: Props): JSX.Element => {
	return (
		<Image
			src={type === 'icon' ? LogoIcon : LogoImage}
			width={type === 'icon' ? 85 : 190}
			height={type === 'icon' ? 85 : 85}
			alt={
				type === 'icon'
					? "Teller logo it's a microphone with sound waves around it and looks like a face blinking eyes"
					: "Teller logo it's a microphone with sound waves around it and looks like a face blinking eyes and Teller aside"
			}
		/>
	);
};

export default Logo;
