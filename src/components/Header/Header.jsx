import styles from './Header.module.css';

export default function Header() {
	return (
		<img className={styles.logo} width={180} src="/src/assets/logo.svg" alt="personal journal logotype" />
	);
}