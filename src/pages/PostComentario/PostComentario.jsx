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
        const response = await axios.get(
            `http://localhost:3000/${post_id}/comment`
        );
        const { postComment } = response.data;
        setComment(postComment);
        console.log(comment);
    }

    useEffect(() => {
        getAllComment();
    }, []);



    return (
        <section className={styles["page-comment"]}>
            <div className={styles["comment"]}>
                <h3>Teste</h3>
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
                <CardPostComentario comment={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. A doloremque, ipsum dolore dicta quidem impedit velit laborum blanditiis alias quos voluptatibus quam esse, eveniet deleniti odit similique, amet aspernatur nam?"} username={"dio Brando"}/>
            </div>
        </section>
    )
}

// PostComentario.propTypes = {
//     post_id: ProtoType.node.isRequired,

// }