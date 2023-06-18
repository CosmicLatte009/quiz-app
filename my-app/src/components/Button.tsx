import { MouseEvent } from "react";
import styles from "../style/components/Button.module.scss";

interface MyProps {
	children: string;
	isEnabled: boolean;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<MyProps> = ({ children, isEnabled, onClick }) => {
	const btnClassName = isEnabled ? styles["btn-able"] : styles["btn-disabled"];
	return (
		<button className={btnClassName} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
