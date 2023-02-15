import Layout from "../components/layout/layout";
import { getNavOptions } from "../helpers/api-utils";
import "../styles/globals.scss";

function MyApp({ Component, pageProps, navOptions }) {
  return (
    <Layout navOptions={navOptions}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const navOptions = await getNavOptions();

  return { pageProps, navOptions };
};

export default MyApp;
