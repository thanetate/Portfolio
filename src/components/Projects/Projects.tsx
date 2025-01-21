const projects = [
	{
		demo: "/theorydemo.png",
		title: "Theory Climbing",
		github: "https://github.com/thanetate/Theory-v2",
		site: "https://www.theoryclimbing.com/",
		desc: (
			<>
				🚧 This site is currently under construction 🚧 <br />
				Theory Climbing is an <span className="white">e-commerce</span> web
				application I built to sell climbing apparel. Featuring secure
				authentication via <span className="white">Supabase Auth</span> and a
				secure checkout session using the{" "}
				<span className="white">Stripe API, </span>
				this site ensures a safe and user-friendly shopping experience.
			</>
		),
		bubbles: ["C#", ".NET", "Azure", "PostgreSQL"],
	},
	{
		demo: "/mapodemo.png",
		title: "Mapo",
		github: "https://github.com/bensivo/mapo",
		site: "https://mapo.dev.bensivo.com/app/",
		desc: (
			<>
				Contributed to Mapo, a personal project by a senior software developer,
				by:
				<br />• Implementing a{" "}
				<span className="white">folder management feature</span> for organizing
				user content.
				<br />• Integrating <span className="white">touch features</span> for
				seamless usability on mobile devices.
				<br />• Developing and writing <span className="white">
					unit tests
				</span>{" "}
				to ensure reliability and maintain high-quality code standards.
			</>
		),
		bubbles: ["Go", "Bash", "TypeScript", "PostgreSQL"],
	},
	{
		demo: "/readingrealm.png",
		title: "Reading Realm",
		github: "https://github.com/ksheahen/Reading-Realm",
		desc: (
			<>
				Reading Realm is a{" "}
				<span className="white">book management system </span>and{" "}
				<span className="white">social platform</span> built with a team of
				four. It features{" "}
				<span className="white">Google Books API integration, </span>
				secure authentication, personalized reading lists, reading goals, and
				social features to connect book lovers. Agile methodologies and customer
				feedback guided development for a user-focused experience.
			</>
		),
		bubbles: ["React", "Node.js", "Express.js", "MongoDB"],
	},
	{
		demo: "/libraryloandemo.png",
		title: "Library System",
		github: "https://github.com/thanetate/Library-Management-System",
		desc: (
			<>
				Library Loan Management System is a software solution I developed to
				streamline the organization of library loans, patrons, and books. Built
				with <span className="white">Object-Oriented Programming</span>{" "}
				principles and automated using a Makefile, it simplifies library
				operations and demonstrates my ability to design efficient, real-world
				solutions.
			</>
		),
		bubbles: ["C++", "Makefile"],
	},
];

function Projects() {
	return (
		<div id="Projects" className="projects-container">
			<div className="p-title">Projects</div>
			{projects.map((project, index) => (
				<a key={index} className={`project${index + 1}-container`}>
					<img src={`${project.demo}`} alt="Demo" className="demo" />
					<div className="sub-container">
						<div className="title">{project.title}</div>
						{project.site && (
							<a href={`${project.site}`} className="newarrow"></a>
						)}
						<a href={`${project.github}`} className="exportgithub"></a>
						<p>{project.desc}</p>
						<div className="bubbles">
							{project.bubbles.map((bubble, j) => (
								<div key={j} className="g-bubble">
									{bubble}
								</div>
							))}
						</div>
					</div>
				</a>
			))}
		</div>
	);
}

export default Projects;
