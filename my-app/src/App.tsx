import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import "./style/reset.css";
import "./style/global.css";

function App(): JSX.Element {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/quiz" element={<QuizPage />} />
				<Route path="/result" element={<ResultPage />} />
			</Routes>
		</Router>
	);
}

export default App;
