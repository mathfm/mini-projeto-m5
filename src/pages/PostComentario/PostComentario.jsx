import { useParams } from "react-router-dom";
import CardPostComentario from "../../components/cardPostComentario/cardPostComentario.component";
// import ProtoType from "prop-types";
import styles from "./postComentario.module.css";
import { useEffect, useState } from "react";
import axios from "axios";


export default function PostComentario() {
    const { post_id } = useParams();
    const [comment, setComment] = useState([]);

    const getAllComment = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/${post_id}/comment`
            );
            const { postComment } = response.data;
            setComment(postComment);    
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getAllComment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <section className={styles["page-comment"]}>
            <div className={styles["comment"]}>
                <h3>Comentarios do post</h3>
                {
                    comment.map((item) => {
                        return (
                            <CardPostComentario
                                key={item.id}
                                username={item.tb_user.username}
                                comment={item.comment}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

// PostComentario.propTypes = {
//     post_id: ProtoType.node.isRequired,

// }