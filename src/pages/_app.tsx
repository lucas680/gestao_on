import "./globals.css";
import './theme.scss';
import '../utils/utils.tsx';
import type { AppProps } from "next/app";
import SideBar from "@/components/sideBar/sideBar";
import Loading from "@/components/loading/loading";
import HeadComponent from "@/components/head/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadComponent />
      <div id="alerts-container" className="alerts-container"></div>
      <div id="alert-warning"></div>
      <div id="confirm-container"></div>
      <Loading />
      <SideBar page={<Component {...pageProps} />} />
    </>
  );
}
