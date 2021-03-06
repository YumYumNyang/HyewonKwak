import "../styles/globals.css";
import gsap from "gsap";
import type { AppProps } from "next/app";
import Layout from "../src/components/layout/components/Layout";
import { createContext, useEffect, useRef, useState } from "react";

import { ThemeProvider } from "next-themes";
import { TransitionProvider } from "../src/components/layout/components/TransitionProvider";
import Head from "next/head";
type moveProps = {
	clientX: number;
	clientY: number;
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<TransitionProvider>
			<ThemeProvider attribute="class">
				<Head>
					<title>HYEWON, THE CREATOR</title>
				</Head>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</TransitionProvider>
	);
}

export default MyApp;
