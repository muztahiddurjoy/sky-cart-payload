import React from 'react';
import type { AppProps } from 'next/app';

import '../css/style.css';
import '../css/compiledTailwind.css'
const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <div data-theme="light">
    <Component {...pageProps} />
  </div>
);

export default MyApp;
