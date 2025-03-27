function Experience() {
	return (
		<div id="Experience" className="experience-container">
			<div className="e-title">Experience</div>
			<div className="experience1-container">
				<div className="date">MAY - AUG 2025</div>
				<div className="sub-container">
					<div className="title">
						Software Engineer Intern ・ Fisher Investments{" "}
					</div>
					<p>
						Excited to join Fisher Investments as an Application Developer
						Intern, where I’ll dive into hands-on experience in financial
						technology, strengthen my coding skills, and contribute to impactful
						projects in a collaborative setting.
					</p>
					<div className="bubbles">
						<div className="g-bubble">React</div>
						<div className="g-bubble">Figma</div>
					</div>
				</div>
			</div>
			<div className="experience2-container">
				<div className="date">MAR 2025</div>
				<div className="sub-container">
					<div className="title-arrow-container">
						<div className="title">Freelance Web Developer</div>
						<a href={""} className="newarrow"></a>
					</div>
					<p>
						Developed a portfolio website for a photography student, ensuring a
						minimalistic design and user-friendly experience. Leveraged{" "}
						<span className="white">EmailJS</span> to create a seamless contact
						form, allowing easy communication between visitors and the client.
					</p>
					<div className="bubbles">
						<div className="g-bubble">React</div>
						<div className="g-bubble">Figma</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Experience;
