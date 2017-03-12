// @flow

import { createRenderer } from 'fela';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';

export default createRenderer({
  plugins: [fallbackValue(), prefixer()],
});
