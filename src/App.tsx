import { useState } from "react";
import Head from "./components/Head/Head";
import RightSide from "./components/RightSide/RightSide";
import { useEffect } from "react";
import Toggle from "./components/Toggle/Toggle";

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
		<div className="parent-container">
			<Toggle theme={theme} toggleTheme={toggleTheme} />
			<Head />
			<RightSide />
		</div>
	);
}

export default App;
