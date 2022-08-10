import { Resolver } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { POST_MESSAGE_LENGTH } from 'constant';

import { HomeSchemaProps } from '../@types';

const homeResolver: Resolver<HomeSchemaProps> = yupResolver(
	yup.object().shape({
		postMessage: yup.string().max(POST_MESSAGE_LENGTH).required('attributeName'),
	})
);

export { homeResolver };
