import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Router, { useRouter } from "next/router";
import { Layout } from "../components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import "../styles/globals.css";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, [router.pathname]);

  return (
    <Layout className="global" bg="no-bg">
      <Banner />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
