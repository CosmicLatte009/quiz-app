import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Wrap from "../components/Wrap";
import Button from "../components/Button";
import styles from "../style/pages/QuizPage.module.scss";

type Question = {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
};

const QuizPage: React.FC = () => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedBtn, setSelectedBtn] = useState<number | null>(0);
	const [questionData, setQuestionData] = useState<Question[]>([]);
	const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
	const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
	const [incorrectAnswersCount, setIncorrectAnswersCount] = useState(0);
	const [startTime, setStartTime] = useState<Date | null>(null);

	const navigate = useNavigate();

	const currentQuestion = questionData[currentQuestionIndex];

	const handleSelectAnswer = (buttonIndex: number) => {
		setSelectedBtn(buttonIndex);
		setIsAnswerCorrect(
			currentQuestion.correct_answer === answerOptions[buttonIndex]
		);
	};

	const handleToNextPage = () => {
		if (selectedBtn === null) {
			// 선택된 버튼이 없는 경우, 다음 문항으로 넘어가지 않도록 처리
			return;
		}

		if (isAnswerCorrect) {
			setCorrectAnswersCount((prevCount) => prevCount + 1);
		} else {
			setIncorrectAnswersCount((prevCount) => prevCount + 1);
		}

		if (currentQuestionIndex === questionData.length - 1) {
			const endTime = new Date();
			const totalTimeInSeconds =
				startTime && endTime
					? Math.floor((endTime.getTime() - startTime.getTime()) / 1000)
					: 0;
			navigate("/result", {
				state: {
					correctAnswersCount: correctAnswersCount + (isAnswerCorrect ? 1 : 0),
					incorrectAnswersCount:
						incorrectAnswersCount + (isAnswerCorrect ? 0 : 1),
					totalTimeInSeconds,
				},
			});
		} else {
			setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
			setSelectedBtn(null);
			setIsAnswerCorrect(false);
		}
	};

	useEffect(() => {
		const nickname = localStorage.getItem("nickname");

		if (!nickname) {
			navigate("/");
		}
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://opentdb.com/api.php?amount=10&type=multiple"
				);
				const data = await response.json();
				const resultData: Question[] = data.results;
				setQuestionData(resultData);
				setCurrentQuestionIndex(0);
				setSelectedBtn(null);
				setIsAnswerCorrect(false);
			} catch (error) {
				console.error("Error fetching Data:", error);
			}
		};
		fetchData();
		setStartTime(new Date());
	}, [navigate]);

	if (!currentQuestion) {
		return <div>Loading...</div>;
	}

	const answerOptions: string[] = [
		...currentQuestion["incorrect_answers"],
		currentQuestion["correct_answer"],
	];

	return (
		<Wrap>
			<p className={styles.desc}>{currentQuestion.question}</p>
			{selectedBtn !== null && (
				<p className={isAnswerCorrect ? styles.correct : styles.incorrect}>
					{isAnswerCorrect ? "정답!" : "오답!"}
				</p>
			)}
			<div className={styles["btn-group"]}>
				{answerOptions.map((answer, index) => (
					<Button
						key={index}
						className={
							selectedBtn === null
								? "unselect"
								: selectedBtn === index && isAnswerCorrect
								? "correct"
								: selectedBtn === index && !isAnswerCorrect
								? "incorrect"
								: "unselect"
						}
						onClick={() => handleSelectAnswer(index)}
					>
						{answer}
					</Button>
				))}
			</div>
			{selectedBtn !== null && (
				<button className={styles["btn-next"]} onClick={handleToNextPage}>
					{currentQuestionIndex === questionData.length - 1
						? "결과 페이지로!"
						: "다음 문항"}
				</button>
			)}
		</Wrap>
	);
};

export default QuizPage;
