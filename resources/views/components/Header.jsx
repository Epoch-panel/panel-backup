import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

const Header = ({ title }) => (
  <Head>
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title || 'Default Title'}</title>
    <Script src="/assets/js/app.js" />
      </Head>
);

export default Header;