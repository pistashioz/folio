import "./globals.css";
import Mousefollow from "../components/MouseFollow";
import Head from 'next/head';
export const metadata = {
  title: "VICTORIA"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="">
        {children}
        <Mousefollow />
      </body>
    </html>
  );
}
