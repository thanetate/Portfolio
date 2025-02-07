import { useState, useEffect } from "react";
import Head from "./components/Head/Head";
import RightSide from "./components/RightSide/RightSide";
import Toggle from "./components/Toggle/Toggle";
import { motion } from "framer-motion";

function App() {
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		const linkTag = document.createElement("link");
		linkTag.rel = "stylesheet";
		linkTag.href = theme === "dark" ? "/styles/dark.css" : "/styles/light.css";

		document.head.appendChild(linkTag);
		return () => {
			document.head.removeChild(linkTag);
		};
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme: string) => (prevTheme === "dark" ? "light" : "dark"));
	};
	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 1.3}}
		>

		<div className="parent-container">
			<Toggle theme={theme} toggleTheme={toggleTheme} />
			<Head />
			<RightSide />
		</div>
		</motion.div>
	);
}

export default App;
