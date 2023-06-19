import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Wrap from "../components/Wrap";
import styles from "../style/pages/HomePage.module.scss";
import ErrorMessage from "../components/ErrorMessage";

const HomePage: React.FC = () => {
	const [inputValue, setInputValue] = useState("");
	const [showErrorMessage, setShowErrorMessage] = useState(false);
	const navigate = useNavigate();

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleClickBtn = () => {
		if (inputValue !== "") {
			setShowErrorMessage(false);
			localStorage.setItem("nickname", inputValue);
			navigate({ pathname: "/quiz" });
		} else {
			setShowErrorMessage(true);
		}
	};

	return (
		<Wrap>
			<h1 className={styles.title}>Quiz App</h1>
			<section className={styles.group}>
				{showErrorMessage && inputValue === "" ? (
					<ErrorMessage>닉네임을 입력해주세요! </ErrorMessage>
				) : null}
				<Input onChange={handleInputChange} />
				<Button
					className={inputValue !== "" ? "active" : "disabled"}
					onClick={() => handleClickBtn()}
				>
					퀴즈 시작하기
				</Button>
			</section>
		</Wrap>
	);
};

export default HomePage;
