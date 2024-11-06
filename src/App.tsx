import "./styles/dark.css";
import { useAtom } from "jotai";
import themeAtom from "./atoms/themeAtom";
import Head from "./components/Head/Head";
import RightSide from "./components/RightSide/RightSide";

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
			<Head theme={theme} toggleTheme={toggleTheme}/>
      <RightSide />
		</>
	);
}

export default App;
