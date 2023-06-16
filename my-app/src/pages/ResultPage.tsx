import Wrap from "../components/Wrap";
import NumberText from "../components/NumberText";
import styles from "../style/pages/ResultPage.module.scss";

const ResultPage: React.FC = () => {
	return (
		<Wrap>
			<h1 className={styles.title}>결과</h1>
			<section className={styles["result-group"]}>
				<NumberText numb={84}>소요시간</NumberText>
				<NumberText numb={64}> 정답개수</NumberText>
				<NumberText numb={64}> 오답 수</NumberText>
			</section>
		</Wrap>
	);
};

export default ResultPage;
