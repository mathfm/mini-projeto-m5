import styles from "./container.module.css";
import PropTypes from 'prop-types';

export default function Container({ children }) {
    return (
        <section className={styles["container"]}>
            { children }
        </section>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

