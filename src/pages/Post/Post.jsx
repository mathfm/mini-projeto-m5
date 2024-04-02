import { useEffect, useState } from 'react'
import styles from './post.module.css'
import axios from 'axios';
import CardPost from '../../components/cardPost/cardPost.component';
export default function Post() {
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
            <h3 className={styles["title-page"]}>Ultimas postagens feitas</h3>
            {
                post.map(post => {
                    return (
                        <CardPost
                            key={post.id}
                            post_id={post.id}
                            username={post.tb_user.username}
                            title={post.title}
                            description={post.description} />
                       )  
                })
            }
        </section>
    )
}

