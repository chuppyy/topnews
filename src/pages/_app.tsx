import Head from "next/head";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layouts/layout";
import '../globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <script async src="https://server.adhub.media/ads/topnews_livextop_com.4b96998c-a404-467f-9f79-258577a52481.display.js"></script>
      <script defer src="https://videoadstech.org/ads/topnews_livextop_com.0a05145f-8239-4054-9dc9-acd55fcdddd5.video.js"></script>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};
