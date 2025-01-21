import "./Toggle.css";

interface ToggleProps {
	theme: string;
	toggleTheme: () => void;
}

export default function Toggle({ theme, toggleTheme }: ToggleProps) {
	return (
		<>
			<label className="switch">
				<input
					type="checkbox"
					className="input"
					checked={theme === "dark"}
					onChange={toggleTheme}
				/>
				<span className="slider"></span>
			</label>
		</>
	);
}
