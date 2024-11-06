import React from "react";
import "./styles/dark.css";
import { useAtom } from "jotai";
import themeAtom from "./atoms/themeAtom";

function App() {
	const [theme, setTheme] = useAtom(themeAtom);

	const toggleTheme = () => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === "dark" ? "light" : "dark";
			localStorage.setItem("theme", newTheme);
			return newTheme;
		});
	};

	return (
		<>
			<link
				rel="stylesheet"
				href={theme === "dark" ? "/src/styles/dark.css" : "/src/styles/light.css"}
			/>
			<img
				className="lightdark"
				src={theme === "dark" ? "/icons/sun.svg" : "/icons/moon.svg"}
				alt="Toggle Theme Icon"
				onClick={toggleTheme}
				style={{ cursor: "pointer" }}
			/>
			<h1>Hello world</h1>
		</>
	);
}

export default App;
