import { ImgHTMLAttributes, useState, useCallback } from 'react';

import chroma from 'chroma-js';

import * as Styles from './styles';

export interface StyledProps {
	isBordered?: boolean;
}

interface Props extends StyledProps, ImgHTMLAttributes<HTMLImageElement> {
	src?: string;
	alt?: string;
}

const Img = ({
	src,
	alt = 'Not found',
	isBordered = false,
	...props
}: Props): JSX.Element => {
	const [imageSrc, setImageSrc] = useState<string>(src || '');

	const handleErrorImages = useCallback(() => {
		const canvasElement = document.createElement('canvas');
		const context = canvasElement.getContext('2d') as CanvasRenderingContext2D;

		canvasElement.width = 220;
		canvasElement.height = 220;

		context.fillStyle = String(chroma.random().darken(2));
		context.fillRect(0, 0, canvasElement.width, canvasElement.height);

		context.font = '100px sans-serif';
		context.fillStyle = '#FFF';
		context.textAlign = 'center';
		context.textBaseline = 'middle';

		const textSplitted = alt.split(' ');
		const textFirstLetters = textSplitted.map((text) => text.charAt(0));
		const textCleanEmpty = textFirstLetters.filter((text) => !!text);
		const textJoined = textCleanEmpty.join('');

		context.fillText(
			`${textJoined.slice(0, 2).toUpperCase()}`,
			canvasElement.width / 2,
			canvasElement.height / 2
		);

		const dataUrl = canvasElement.toDataURL();

		setImageSrc(dataUrl);
	}, [alt]);

	return (
		<Styles.ImageWrapper>
			<Styles.Image
				{...props}
				src={imageSrc}
				alt={alt}
				onError={handleErrorImages}
				isBordered={isBordered}
				referrerPolicy="no-referrer"
				loading="lazy"
			/>
		</Styles.ImageWrapper>
	);
};

export default Img;
