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
	const [isAnswerSelected, setIsAnswerSelected] = useState(false);
	const [selectedBtn, setSelecetedBtn] = useState<number | null>(null);
	const [questionData, setQuestionData] = useState<Question[]>([]);
	const navigate = useNavigate();

	const handleSelectAnswer = (buttonIndex: number) => {
		setIsAnswerSelected(true);
		setSelecetedBtn(buttonIndex);
		console.log("test");
	};

	const handleToNextPage = () => {
		if (currentQuestionIndex < questionData.length - 1) {
			setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
			setIsAnswerSelected(false);
			setSelecetedBtn(null);
		} else {
			navigate({ pathname: "/result" });
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://opentdb.com/api.php?amount=10&type=multiple"
				);
				const data = await response.json();
				const resultData: Question[] = data.results;
				setQuestionData(resultData);
			} catch (error) {
				console.error("Error fetching Data:", error);
			}
		};
		fetchData();
	}, []);

	const currentQuestion = questionData[currentQuestionIndex];

	if (!currentQuestion) {
		return <div>Loading...</div>;
	}

	const answerOptions = [
		...currentQuestion["incorrect_answers"],
		currentQuestion["correct_answer"],
	];

	return (
		<Wrap>
			<p className={styles.desc}>{currentQuestion.question}</p>
			<div className={styles["btn-group"]}>
				{answerOptions.map((answer, index) => (
					<Button
						key={index}
						isEnabled={selectedBtn === index}
						onClick={() => handleSelectAnswer(index)}
					>
						{answer}
					</Button>
				))}
			</div>
			{isAnswerSelected && (
				<Button isEnabled={true} onClick={handleToNextPage}>
					다음 문항
				</Button>
			)}
		</Wrap>
	);
};

export default QuizPage;
