import "./globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import SideBar from "@/components/sideBar/sideBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="alerts-container" className="alerts-container"></div>
      <div id="alert-warning"></div>
      <SideBar page={<Component {...pageProps} />} />
    </>
  );
}
