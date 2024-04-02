import styles from "./cardSkill.module.css";
import ProtoType from "prop-types";

export default function CardSkill({title, description, datePubished}) {
    return (
        <section className={styles["card-skill"]}>
            <h4 className={styles["card-skill-title"]}>{title}</h4>
            <p className={styles["card-skill-text"]}>{description}</p>
            <p>Data de Registro: 
                <time className={styles["card-skill-date"]}>
                    {datePubished}
                </time>
            </p>
        </section>
    )
}

CardSkill.propTypes = {
    title: ProtoType.string.isRequired,
    description: ProtoType.string.isRequired,
    datePubished: ProtoType.string.isRequired
}