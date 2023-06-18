import { ChangeEvent } from "react";
import styles from "../style/components/Input.module.scss";

interface MyProps {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<MyProps> = ({ onChange }) => {
	return (
		<div className={styles["input-wrap"]}>
			<input
				className={styles.input}
				type="text"
				placeholder="닉네임을 입력해주세요"
				minLength={2}
				maxLength={10}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
