import styles from "../style/components/Input.module.scss";

const Input: React.FC = () => {
	return (
		<div className={styles["input-wrap"]}>
			<input
				className={styles.input}
				type="text"
				placeholder="닉네임을 입력해주세요"
				minLength={2}
				maxLength={10}
			/>
		</div>
	);
};

export default Input;
