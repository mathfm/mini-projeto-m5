
import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles["header"]}>
            <h3 className={styles["header-title"]}>Bright Idea</h3>
            <nav className={styles["nav-link"]}>
                <Link to="/" className={styles["link"]}>Posts</Link>
                <Link to="/skills" className={styles["link"]}>Skills</Link>
                <a href="https://github.com/mathfm/projeto-final-api"className={styles["link-repo"]} target="_blank" rel="nopenner norefferer">Repositorio</a>
            </nav>
        </header>
    )
}