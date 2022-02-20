import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line */}
          <link 
            rel="preconnect" 
            href="https://fonts.googleapis.com" 
          />

          <link 
            rel="preconnect" 
            href="https://fonts.gstatic.com" 
            crossOrigin="true"
          />

          <link 
              href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,700;0,900;1,400&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&display=swap" 
              rel="stylesheet"
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;