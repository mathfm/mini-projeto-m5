
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles["header"]}>
            <h3>Bright Idea</h3>
            <nav className={styles["nav-link"]}>
                <a href="#" className={styles["link"]}>Home</a>
                <a href="#" className={styles["link"]}>Posts</a>
                <a href="#" className={styles["link"]}>Skills</a>
            </nav>
        </header>
    )
}