import styles from "./cardPostComentario.module.css";
import ProtoType from "prop-types";


export default function CardPostComentario({username, comment}) {
    return (
        <div className={styles["user-info"]}>
            <div className={styles["user-perfil"]}>
                <figure className={styles["user-photo"]}>
                    <img src="/src/assets/dio.jpg" alt="" />
                </figure>
                <h4>{username}</h4>
            </div>
            <div className={styles["user-text"]}>
                <p>{comment}</p>
            </div>
        </div>
    )
}

CardPostComentario.propTypes = {
    username: ProtoType.string.isRequired,
    comment: ProtoType.string.isRequired
}