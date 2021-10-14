import { FC } from 'react';
import Head from 'next/head';

const Header: FC = () => {
  return (
    <Head>
      <title>Alex Robaina</title>
      <link rel="shortcut icon" href="../../../public/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Developer - Photographer - Mountain climber." />
      <meta property="og:title" content="🚀  Alex Robaina 🦄" />
      <meta
        property="og:image"
        content="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1443&q=80"
      />
    </Head>
  );
};

export default Header;
