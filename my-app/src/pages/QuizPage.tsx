import { useNavigate } from "react-router-dom";
import Wrap from "../components/Wrap";
import Button from "../components/Button";
import styles from "../style/pages/QuizPage.module.scss";

const QuizPage: React.FC = () => {
	const navigate = useNavigate();
	const handleClickBtn = () => {
		console.log(test);
	};
	const handleToNextPage = () => {
		navigate({ pathname: "/result" });
	};
	return (
		<Wrap>
			<p className={styles.desc}>문제어쩌고저쩌고?</p>
			<div className={styles["btn-group"]}>
				<Button onClick={handleClickBtn}>객관식1</Button>
				<Button onClick={handleClickBtn}>객관식2</Button>
				<Button onClick={handleClickBtn}>객관식3</Button>
				<Button onClick={handleClickBtn}>객관식4</Button>
			</div>
			<Button onClick={handleToNextPage}>다음 문항</Button>
		</Wrap>
	);
};

export default QuizPage;
