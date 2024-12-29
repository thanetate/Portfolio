function Skills() {
	return (
		<div className="skills-container">
			<div className="sub-containers">
				<div className="title">Languages</div>
				<div className="bubbles">
					<div className="b-bubble">JavaScript</div>
					<div className="b-bubble">TypeScript</div>
					<div className="b-bubble">C#</div>
					<div className="b-bubble">C++</div>
					<div className="b-bubble">Go</div>
					<div className="b-bubble">HTML / CSS</div>
				</div>
			</div>
			<div className="sub-containers">
				<div className="title">Frontend & Design</div>
				<div className="bubbles">
					<div className="g-bubble">React</div>
					<div className="g-bubble">Next.js</div>
					<div className="g-bubble">Figma</div>
				</div>
			</div>
			<div className="sub-containers">
				<div className="title">Backend</div>
				<div className="bubbles">
					<div className="p-bubble">.NET Core</div>
					<div className="p-bubble">Node.js</div>
					<div className="p-bubble">Express.js</div>
					<div className="p-bubble">Git</div>
				</div>
			</div>
			<div className="sub-containers">
				<div className="title">Databases</div>
				<div className="bubbles">
					<div className="r-bubble">PostgreSQL</div>
                    <div className="r-bubble">MongoDB</div>
				</div>
			</div>
			<div className="sub-containers">
				<div className="title">Management</div>
				<div className="bubbles">
					<div className="y-bubble">Jira</div>
					<div className="y-bubble">ClickUp</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
