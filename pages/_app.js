import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress height={6} color="#4338C9" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
