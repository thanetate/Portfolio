import { useAtom } from "jotai";
import themeAtom from "./atoms/themeAtom";
import Head from "./components/Head/Head";
import RightSide from "./components/RightSide/RightSide";
import { useEffect } from "react";

function App() {
	const [theme, setTheme] = useAtom(themeAtom);

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme); // Store the theme in localStorage
      return newTheme;
    });
  };

  // Load theme from localStorage and apply the corresponding CSS
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("light"); // Default to light mode if no saved theme
    }
  }, [setTheme]);

  useEffect(() => {
    // Dynamically load the appropriate theme CSS file (light.css or dark.css)
    const linkTag = document.createElement("link");
    linkTag.rel = "stylesheet";

    // Based on the theme, set the href to the appropriate CSS file
    if (theme === "dark") {
      linkTag.href = "/styles/dark.css"; // Assuming CSS files are in /public/styles
    } else {
      linkTag.href = "/styles/light.css";
    }

    // Append the link tag to the head
    document.head.appendChild(linkTag);

    // Cleanup: Remove the link tag when the component unmounts or theme changes
    return () => {
      document.head.removeChild(linkTag);
    };
  }, [theme]);

	return (
		<>
			{/* <link
				rel="stylesheet"
				href={theme === "dark" ? "/src/styles/dark.css" : "/src/styles/light.css"}
			/> */}
			<img
				className="lightdark"
				src={theme === "dark" ? "/icons/sun.svg" : "/icons/moon.svg"}
				alt="Toggle Theme Icon"
				onClick={toggleTheme}
				style={{ cursor: "pointer" }}
			/>
			<Head theme={theme} toggleTheme={toggleTheme} />
			<RightSide />
		</>
	);
}

export default App;
