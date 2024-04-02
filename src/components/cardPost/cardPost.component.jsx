import { Link } from "react-router-dom";
import styles from "./cardPost.module.css";
import ProtoType from "prop-types";


export default function CardPost({ username, title, description, post_id}) {
    return (
        <div className={styles["post-content"]}>
            <div className={styles["post-user-perfil"]}>
                <figure className={styles["post-img-perfil"]}>
                    <img src="/src/assets/image.png" alt="" />
                </figure>
                <p>{ username }</p>
            </div>
            <div className={styles["post-text"]}>
                <h2 className={styles["post-text-title"]}>{title}</h2>
                <p>{description}</p>
                <Link to={`/${post_id}/comment`}  className={styles["post-link"]}>Exibir comentarios da postagem</Link>
            </div>
        </div>
    )
}

CardPost.propTypes = {
    username: ProtoType.string.isRequired,
    title: ProtoType.string.isRequired,
    description: ProtoType.string.isRequired,
    post_id: ProtoType.string.isRequired
}