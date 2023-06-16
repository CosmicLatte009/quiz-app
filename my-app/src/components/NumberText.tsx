import styles from "../style/components/NumberText.module.scss";

interface MyProps {
	children: string;
	numb: number;
}

const NumberText: React.FC<MyProps> = ({ children, numb }) => {
	return (
		<div className={styles["numb-wrap"]}>
			<strong className={styles.info}>{children}</strong>
			<p className={styles.numb}>{numb}</p>
		</div>
	);
};

export default NumberText;
