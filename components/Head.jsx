import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Tamim sarkar is a passionate robotics and ai developer"
      />
      <meta
        name="keywords"
        content="tamim holmes, tamim robotics, tamim sarkar, tamim buet, tamim me, tamim ai"
      />
      <meta property="og:title" content="Tamim Sarkar's Portfolio" />
      <meta
        property="og:description"
        content="A Robotics Developer"
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Tamim Sarkar',
};
