import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Wrap from "../components/Wrap";
import styles from "../style/pages/HomePage.module.scss";

const HomePage: React.FC = () => {
	const navigate = useNavigate();

	const handleClickBtn = () => {
		navigate({ pathname: "/quiz" });
	};
	return (
		<Wrap>
			<h1 className={styles.title}>Quiz App</h1>
			<section className={styles.group}>
				<Input />
				<Button onClick={() => handleClickBtn()}>퀴즈 시작하기</Button>
			</section>
		</Wrap>
	);
};

export default HomePage;
