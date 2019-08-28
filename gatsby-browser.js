import React from 'react';
import App from './src/components/App';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

export const onServiceWorkerUpdateReady = () => {
  window.location.reload();
};

export const wrapPageElement = ({ element, props }) => {
  return <App {...props}>{element}</App>;
};
