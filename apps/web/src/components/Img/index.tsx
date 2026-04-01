import { type ImgHTMLAttributes, useState, useCallback } from 'react';

import chroma from 'chroma-js';
import clsx from 'clsx';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	src?: string;
	alt?: string;
	isBordered?: boolean;
}

const Img = ({
	src,
	alt = 'Not found',
	isBordered = false,
	className,
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
			canvasElement.height / 2,
		);

		setImageSrc(canvasElement.toDataURL());
	}, [alt]);

	return (
		<span className="h-full border-none">
			<img
				{...props}
				className={clsx(
					'max-w-full max-h-full rounded-full',
					isBordered && 'border-[3px] border-canvas',
					className,
				)}
				src={imageSrc}
				alt={alt}
				onError={handleErrorImages}
				referrerPolicy="no-referrer"
				loading="lazy"
			/>
		</span>
	);
};

export default Img;
