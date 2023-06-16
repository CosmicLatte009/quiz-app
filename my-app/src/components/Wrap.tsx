import styles from "../style/components/Wrap.module.scss";

const Wrap: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
	return <main className={styles.wrap}>{children}</main>;
};

export default Wrap;
