import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Wrap from "../components/Wrap";
import NumberText from "../components/NumberText";
import styles from "../style/pages/ResultPage.module.scss";

const formatTime = (totalSeconds: number) => {
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;

	return `${minutes.toString().padStart(2, "0")}:${seconds
		.toString()
		.padStart(2, "0")}`;
};

const ResultPage: React.FC = () => {
	const { state } = useLocation();
	const correctAnswersCount = state?.correctAnswersCount;
	const incorrectAnswersCount = state?.incorrectAnswersCount;
	const totalTimeInSeconds = state?.totalTimeInSeconds;

	useEffect(() => {
		if (correctAnswersCount === undefined) {
			alert(correctAnswersCount);
		}
	}, [correctAnswersCount]);

	if (correctAnswersCount === undefined) {
		return null;
	}
	const formattedTime = formatTime(totalTimeInSeconds);

	return (
		<Wrap>
			<h1 className={styles.title}>결과</h1>
			<section className={styles["result-group"]}>
				<NumberText numb={formattedTime}>소요시간</NumberText>
				<NumberText numb={correctAnswersCount}>정답 수</NumberText>
				<NumberText numb={incorrectAnswersCount}> 오답 수</NumberText>
			</section>
		</Wrap>
	);
};

export default ResultPage;
