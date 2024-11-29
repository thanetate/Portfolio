function Projects() {
	return (
		<div id="Projects" className="projects-container">
			<a
				className="project1-container"
			>
				<img
					className="demo"
					src="/readingrealm.png"
					alt="Reading Realm Demo"
				/>
				<div className="sub-container">
					<div className="title">Reading Realm</div>
					<a href="https://github.com/thanetate/Reading-Realm" className="exportgithub"></a>
					<p>
						In a team of four, I helped develop Reading Realm, a social platform
						and book management system designed for book lovers. I implemented
						features such as customizable user profiles, social feeds and
						reading logs, creating an engaging experience for users. We held
						regular feedback meetings with customers to ensure our project
						aligned with their needs and used Agile methodologies in ClickUp to
						manage tasks and sprints, keeping our team organized and focused on
						delivering a high-quality product.
					</p>
					<div className="bubbles">
						<div className="g-bubble">JavaScript</div>
						<div className="g-bubble">TypeScript</div>
						<div className="g-bubble">React</div>
						<div className="g-bubble">Node.js</div>
						<div className="g-bubble">Express.js</div>
						<div className="g-bubble">MongoDB</div>
					</div>
				</div>
			</a>
			<a
				className="project3-container"
			>
				<img className="demo" src="/mapodemo.png" alt="Mapo Demo" />
				<div className="sub-container">
					<div className="title">Mapo</div>
					<a href="https://mapo.dev.bensivo.com/app/" className="newarrow"></a>
					<a href="https://github.com/bensivo/mapo" className="exportgithub"></a>
					<p>
						I collaborated with a senior software engineer to implement a key
						feature using Go, Bash, and PostgreSQL. I designed and built a
						folder management feature, developing controllers, services, and
						models that integrated with a PostgreSQL database. Additionally, I
						created unit tests in Bash to validate CRUD operations, enhancing
						both code reliability and functionality. This experience has
						strengthened my skills in back-end development and RESTful API
						design.
					</p>
					<div className="bubbles">
						<div className="g-bubble">Go</div>
						<div className="g-bubble">Bash</div>
						<div className="g-bubble">PostgreSQL</div>
					</div>
				</div>
			</a>
			<a
				className="project2-container"
			>
				<video
					className="demo"
					src="./theorydemo.mov"
					controls
					title="Theory Climbing Demo"
				/>
				<div className="sub-container">
					<div className="title">Theory Climbing</div>
					<a href="https://theory-climbing.vercel.app/" className="newarrow"></a>
					<a href="https://github.com/thanetate/Theory-Climbing" className="exportgithub"></a>
					<p>
						Theory Climbing is a web application I developed to blend
						my six years of rock climbing experience with my passion for web
						development. Built using modern technologies like Next.js, the site
						features a responsive user interface, authentication, and API
						integration. This project not only brings my vision for a climbing
						brand to life but also serves as an ongoing opportunity to expand my
						full-stack skills. While the site is live, I’m actively refining and
						enhancing it to continually elevate the user experience.
					</p>
					<div className="bubbles">
						<div className="g-bubble">TypeScript</div>
						<div className="g-bubble">Next.js</div>
						<div className="g-bubble">MongoDB</div>
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
					<a href="https://github.com/thanetate/Library-Management-System" className="exportgithub"></a>
					<p>
						The Library Loan Management System is a robust software solution I
						developed for efficiently organizing library loans, patrons, and
						books. The system tackles the complexities of managing library
						operations by streamlining the tracking and handling of loans. Built
						with Object-Oriented Programming principles, I used a
						Makefile to structure and automate the project. This system
						demonstrates my ability to create practical solutions for real-world
						challenges using efficient design and coding practices.
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
