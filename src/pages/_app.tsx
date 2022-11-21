import Head from "next/head"
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export const App = (props: AppProps) => {
  const {
    Component,
      pageProps: { session, initialState, ...pageProps },
  } = props;

  return (
    <>
      <Head>
        <title>kwatch</title>
        <meta name="description" content="kwatch" />
      </Head>
      <SessionProvider>
        <Component {...pageProps}/>
      </SessionProvider>
    </>
  );
}

export default App;
