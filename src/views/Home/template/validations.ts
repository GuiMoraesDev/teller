import { Resolver } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { POST_MESSAGE_LENGTH } from 'constant';

import { PostNewPostParams } from '../@types';

export interface HomeResolverProps {
	body: PostNewPostParams['body'];
}

const homeResolver: Resolver<HomeResolverProps> = yupResolver(
	yup.object().shape({
		body: yup.string().max(POST_MESSAGE_LENGTH).required('Message is required'),
	})
);

export { homeResolver };
