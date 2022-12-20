import "../styles/globals.css";
import Layout from "../Components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
