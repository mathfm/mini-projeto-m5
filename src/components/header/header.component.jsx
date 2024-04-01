
import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles["header"]}>
            <h3>Bright Idea</h3>
            <nav className={styles["nav-link"]}>
                <Link to="/" className={styles["link"]}>Home</Link>
                <Link to="/posts" className={styles["link"]}>Posts</Link>
                <Link to="/skills" className={styles["link"]}>Skills</Link>
            </nav>
        </header>
    )
}