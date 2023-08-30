import { Box } from '@onekeyhq/components';

import { useShowBookmark } from '../../hooks/useControl';

import { Main } from './Main';
import { Restricted } from './Restricted';

export const Unrestricted = () => (
  <Box flex="1" bg="background-default">
    <Main />
  </Box>
);

export const Mobile = () => {
  let showBookmark = useShowBookmark();
  showBookmark = true;
  return !showBookmark ? <Restricted /> : <Unrestricted />;
};
