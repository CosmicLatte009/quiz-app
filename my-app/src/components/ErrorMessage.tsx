import styles from "../style/components/ErrorMessage.module.scss";

interface MyProps {
	children: string;
}

const ErrorMessage: React.FC<MyProps> = ({ children }) => {
	return <strong className={styles.message}>{children}</strong>;
};

export default ErrorMessage;
