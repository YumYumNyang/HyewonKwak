import { AnimatePresence, motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import React, {
	ReactElement,
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import Cursor, { CursorHandle } from "./Cursor";
import Footer from "./Footer";
import Header from "./Header";
import { TransitionContext } from "./TransitionProvider";

type LayoutProps = {
	children: ReactElement;
};

type moveProps = {
	clientX: number;
	clientY: number;
};

const pageAnimation = {
	hidden: { top: "0", height: "0vh" },
	page: {
		height: ["0vh", "100vh", "100vh", "0vh"],
		transition: {
			duration: 2,
			time: [0, 1.4, 1.5, 2],
		},
	},
};

const Layout: NextPage<LayoutProps> = ({ children }) => {
	const router = useRouter();
	// useEffect(() => {
	//   if (cursorRef.current) {
	//     cursorRef.current.moveTo(innerWidth / 2, innerHeight / 2);
	//     const onMove = ({ clientX, clientY }: moveProps) => {
	//       if (cursorRef.current) cursorRef.current.moveTo(clientX, clientY);
	//     };
	//     window.addEventListener("pointermove", onMove);
	//     return () => window.removeEventListener("pointermove", onMove);
	//   }
	// }, []);

	return (
		<div className="container flex flex-col min-w-full min-h-screen dark:text-white dark:bg-black">
			{router.pathname === "/blog" ? (
				<>{children}</>
			) : (
				<>
					<Header />
					{children}
					<Footer />
				</>
			)}
		</div>
	);
};

export default Layout;
//MyAPP의 higher order component, wrapper로 쓰일 것임
