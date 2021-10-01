import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name='robots' content='noindex' />
          <link
            href='https://fonts.googleapis.com/css2?family=Material+Icons&display=swap'
            rel='stylesheet'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <link
            href='https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;300;500;700;800&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='bg-white text-gray-600'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
