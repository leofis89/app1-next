import React from 'react';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index/index.css';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
