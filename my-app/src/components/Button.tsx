import { MouseEvent } from "react";
import styles from "../style/components/Button.module.scss";

interface MyProps {
	children: string;
	className?: string;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<MyProps> = ({ children, className, onClick }) => {
	const btnClassName = className ? `${styles[className]}` : styles.active;
	return (
		<button className={btnClassName} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
