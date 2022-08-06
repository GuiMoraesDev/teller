import { PropsWithChildren, useCallback } from 'react';

import Logo from 'components/Logo';
import Text from 'components/Text';

import * as Styles from './styles';

const SignLayout = ({ children }: PropsWithChildren<{}>): JSX.Element => (
	<Styles.Container>
		<Styles.Header>
			<Logo type="logo" />
		</Styles.Header>

		{children}

		<Styles.Footer>
			<Text label="Teller @2022" dimension="body1" />
		</Styles.Footer>
	</Styles.Container>
);

export default SignLayout;
