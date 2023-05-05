import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700&family=Oswald:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
