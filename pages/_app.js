import "@/public/assets/vendor/aos/aos.js";
import "@/public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "@/public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "@/public/assets/vendor/swiper/swiper-bundle.min.css";
import "@/public/assets/vendor/glightbox/css/glightbox.min.css";
import "@/styles/metamask.css";
import "@/public/assets/css/main.css";
import { createClient, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";
import { mainnet } from "wagmi/chains";

import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
const { provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

import Layout from "../components/layout/layout.jsx";
export default function App(props) {
  return (
    <Layout>
      <ThemeProvider>
        <SessionProvider session={props.pageProps.session} refetchInterval={0}>
          <props.Component {...props.pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </Layout>
  );
}
