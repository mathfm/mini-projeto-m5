import styles from "./postComentario.module.css";
export default function PostComentario() {
    return (
        <section className={styles["page-comment"]}>
            <div className={styles["comment"]}>
                <h3>Post aqui</h3>
                <div className={styles["user-info"]}>
                    <div className={styles["user-perfil"]}>
                        <figure className={styles["user-photo"]}>
                            <img src="/src/assets/dio.jpg" alt="" />
                        </figure>
                        <h4>Dio Brando</h4>
                    </div>
                    <div className={styles["user-text"]}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A doloremque, ipsum dolore dicta quidem impedit velit laborum blanditiis alias quos voluptatibus quam esse, eveniet deleniti odit similique, amet aspernatur nam?</p>
                    </div>
                </div>
                <div className={styles["user-info"]}>
                    <div className={styles["user-perfil"]}>
                        <figure className={styles["user-photo"]}>
                            <img src="/src/assets/dio.jpg" alt="" />
                        </figure>
                        <h4>Dio Brando</h4>
                    </div>
                    <div className={styles["user-text"]}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A doloremque, ipsum dolore dicta quidem impedit velit laborum blanditiis alias quos voluptatibus quam esse, eveniet deleniti odit similique, amet aspernatur nam?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}