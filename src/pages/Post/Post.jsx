import { useEffect, useState } from 'react'
import styles from './post.module.css'
import axios from 'axios';
export default function Posts() {
    const [post, setPost] = useState([]);


    const getAllPost = async () => {
        const response = await axios.get("http://localhost:3000/post");
        const { post } = response.data;
        setPost(post);
    }

    useEffect(() => {
        getAllPost();
    }, []);



    return (
        <section className={styles["post-page"]}>
            <h2 className={styles["title-page"]}>Ultimas postagens feitas</h2>
            {
                
                post.map(post => {
                    return (<div key={post.id} className={styles["post-content"]}>
                        <div className={styles["post-user-perfil"]}>
                            <figure className={styles["post-img-perfil"]}>
                                <img src="/src/assets/dio.jpg" alt="" />
                            </figure>
                            <p>{ post.tb_user.username }</p>
                        </div>
                        <div className={styles["post-text"]}>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <a href="#" className={styles["post-link"]}>Exibir comentarios da postagem</a>
                        </div>
                    </div>)
                })
            }
        </section>
    )
}

/* 
return (
        <section className={styles["post-page"]}>
            <h2 className={styles["title-page"]}>Ultimas postagens feitas</h2>
            <div className={styles["post-content"]}>
                <div className={styles["post-user-perfil"]}>
                    <figure className={styles["post-img-perfil"]}>
                        <img src="/src/assets/dio.jpg" alt="" />
                    </figure>
                    <p>Dio Brando</p>
                </div>

                <div className={styles["post-text"]}>
                    <h2>Porque Javascript é Paia?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ex labore voluptates consequatur maxime temporibus alias inventore mollitia magnam. Maiores saepe ut in labore rerum quo tempore eligendi dolor corporis?</p>
                    <a href="#" className={styles["post-link"]}>Exibir comentarios da postagem</a>
                </div>
            </div>
        </section>
    )
*/