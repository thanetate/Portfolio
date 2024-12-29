function Projects() {
	return (
		<div id="Projects" className="projects-container">
			<a className="project2-container">
				<video
					className="demo"
					src="./theorydemo.mov"
					controls
					title="Theory Climbing Demo"
				/>
				<div className="sub-container">
					<div className="title">Theory Climbing</div>
					<a
						href="https://theory-climbing.vercel.app/"
						className="newarrow"
					></a>
					<a
						href="https://github.com/thanetate/Theory-Climbing"
						className="exportgithub"
					></a>
					<p>
						Theory Climbing is an <span className="white">e-commerce</span> web
						application I built to sell climbing apparel. Developed with
						Next.js, it features secure authentication via{" "}
						<span className="white">Auth0</span> and a secure checkout
						experience using the <span className="white">PayPal API, </span>
						providing a seamless and safe shopping experience.
					</p>
					<div className="bubbles">
						<div className="g-bubble">Next.js</div>
						<div className="g-bubble">MongoDB</div>
					</div>
				</div>
			</a>
			<a className="project1-container">
				<img
					className="demo"
					src="/readingrealm.png"
					alt="Reading Realm Demo"
				/>
				<div className="sub-container">
					<div className="title">Reading Realm</div>
					<a href="https://reading-realm.vercel.app/" className="newarrow"></a>
					<a
						href="https://github.com/ksheahen/Reading-Realm"
						className="exportgithub"
					></a>
					<p>
						Reading Realm is a{" "}
						<span className="white">book management system </span>and{" "}
						<span className="white">social platform</span> built with a team of
						four. It features{" "}
						<span className="white">Google Books API integration, </span>
						secure authentication, personalized reading lists, reading goals,
						and social features to connect book lovers. Agile methodologies and
						customer feedback guided development for a user-focused experience.
					</p>
					<div className="bubbles">
						<div className="g-bubble">React</div>
						<div className="g-bubble">Node.js</div>
						<div className="g-bubble">Express.js</div>
						<div className="g-bubble">MongoDB</div>
					</div>
				</div>
			</a>
			<a className="project3-container">
				<img className="demo" src="/mapodemo.png" alt="Mapo Demo" />
				<div className="sub-container">
					<div className="title">Mapo</div>
					<a href="https://mapo.dev.bensivo.com/app/" className="newarrow"></a>
					<a
						href="https://github.com/bensivo/mapo"
						className="exportgithub"
					></a>
					<p>
						Contributed to Mapo, a personal project by a senior software
						developer, by:
						<br />• Implementing a{" "}
						<span className="white">folder management feature</span> for
						organizing user content.
						<br />• Integrating <span className="white">
							touch features
						</span>{" "}
						for seamless usability on mobile devices.
						<br />• Developing and writing{" "}
						<span className="white">unit tests</span> to ensure reliability and
						maintain high-quality code standards.
					</p>
					<div className="bubbles">
						<div className="g-bubble">Go</div>
						<div className="g-bubble">Bash</div>
						<div className="g-bubble">PostgreSQL</div>
					</div>
				</div>
			</a>
			<a
				className="project4-container"
				href="https://github.com/thanetate/Library-Management-System"
			>
				<img
					className="demo"
					src="/libraryloandemo.png"
					alt="Library Loan Demo"
				/>
				<div className="sub-container">
					<div className="title">Library System</div>
					<a
						href="https://github.com/thanetate/Library-Management-System"
						className="exportgithub"
					></a>
					<p>
						Library Loan Management System is a software solution I developed to
						streamline the organization of library loans, patrons, and books.
						Built with <span className="white">Object-Oriented Programming</span> principles and automated
						using a Makefile, it simplifies library operations and demonstrates
						my ability to design efficient, real-world solutions.
					</p>
					<div className="bubbles">
						<div className="g-bubble">C++</div>
						<div className="g-bubble">Makefile</div>
					</div>
				</div>
			</a>
		</div>
	);
}

export default Projects;
