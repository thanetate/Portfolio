import Icons from "../Icons/Icons";
import PropTypes from "prop-types";

interface HeadProps {
	theme: string;
	toggleTheme: () => void;
}

const Head: React.FC<HeadProps> = ({ theme, toggleTheme }) => {
	return (
		<>
			<div className="head-container">
				<img
					className="smalllightdark"
					src={theme === "dark" ? "/icons/sun.svg" : "/icons/moon.svg"}
					alt="Toggle Theme Icon"
					onClick={toggleTheme}
					style={{ cursor: "pointer" }}
				/>
				<img className="profile" src="/profile3.png" alt="Profile Picture" width="150px" height="150px"/>
				<div className="name">Thane Tate</div>
				<div className="fullstack">I am a Software Engineer ツ</div>
				<div className="location">📍 Dallas, Texas</div>
				<p>Eager to Expand My Skills in Application Development</p>
				<Icons />
				<div className="scroll">
					<div className="group">
						<a className="about" href="#About">
							<div className="newscroll"></div>
							<span>ABOUT</span>
						</a>
					</div>
					<div className="group">
						<a className="experience" href="#Experience">
							<div className="newscroll"></div>
							<span>EXPERIENCE</span>
						</a>
					</div>
					<div className="group">
						<a className="projects" href="#Projects">
							<div className="newscroll"></div>
							<span>PROJECTS</span>
						</a>
					</div>
				</div>
				<div className="version">v3.1.2</div>
			</div>
		</>
	);
};

Head.propTypes = {
	theme: PropTypes.string.isRequired,
	toggleTheme: PropTypes.func.isRequired,
};

export default Head;
