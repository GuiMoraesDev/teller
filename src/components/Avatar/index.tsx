import * as Styles from './styles';

export interface StyledProps {
	isBordered?: boolean;
}

interface Props extends StyledProps {
	src: string;
	alt: string;
}

const Avatar = ({ src, alt, isBordered = false }: Props): JSX.Element => {
	return (
		<Styles.AvatarWrapper>
			<Styles.Avatar
				src={src}
				alt={alt}
				isBordered={isBordered}
				referrerPolicy="no-referrer"
			/>
		</Styles.AvatarWrapper>
	);
};

export default Avatar;
