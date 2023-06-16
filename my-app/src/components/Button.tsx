import styles from "../style/components/Button.module.scss";

interface MyProps {
	children: string;
	onClick: () => void;
}

const Button: React.FC<MyProps> = ({ children, onClick }) => {
	return (
		<button className={styles.btn} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
