import Head from "./components/Head/Head";
import RightSide from "./components/RightSide/RightSide";
import { motion } from "framer-motion";
import "./App.css";

function App() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.3 }}
		>
			<div className="parent-container">
				<Head />
				<RightSide />
			</div>
		</motion.div>
	);
}

export default App;
