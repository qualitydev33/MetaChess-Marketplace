import { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { MoralisProvider } from "react-moralis";
import sal from "sal.js";
import { ThemeProvider } from "next-themes";
import "../assets/css/bootstrap.min.css";
import "../assets/css/feather.css";
import "../assets/scss/style.scss";
import "react-toastify/dist/ReactToastify.css";
import {SSRProvider} from '@react-aria/ssr'

// const moralisAppId = "RthQq8e4P7aK65qA9AxkrUhs1r2l4LbVBvJ6L71v";
// const moralisServerURL = "https://u9r1l5bklpfl.usemoralis.com:2053/server";
const moralisServerURL = "https://1tnht1h4tqnl.usemoralis.com:2053/server"
const moralisAppId = "dSE6aFiSNftr3Ad06R5zf577efYCJtR9qpyIR69W"

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();
    useEffect(() => {
        sal({ threshold: 0.1, once: true });
    }, [router.asPath]);

    useEffect(() => {
        sal();
    }, []);
    useEffect(() => {
        document.body.className = `${pageProps.className}`;
    });
    return (
        <SSRProvider>
            <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
                <ThemeProvider defaultTheme="dark">
                    <Component {...pageProps} />
                </ThemeProvider>
            </MoralisProvider>
        </SSRProvider>
        
    );
};

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.shape({
        className: PropTypes.string,
    }),
};

export default MyApp;
