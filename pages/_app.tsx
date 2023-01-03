import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Layout } from "../components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  console.log(router);

  return (
    <Layout className="global" bg="no-bg">
      <Banner />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
