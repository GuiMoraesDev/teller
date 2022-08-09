import { Resolver } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { LoginSchemaProps } from '../@types';

const loginResolver: Resolver<LoginSchemaProps> = yupResolver(
	yup.object().shape({
		username: yup.string().max(100).required('attributeName'),
	})
);

export { loginResolver };
