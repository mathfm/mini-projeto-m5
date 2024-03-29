import styles from "./card.module.css";
import ProtoType from "prop-types";

export default function Card({name_ong, name_project, startDate, endDate, description}) {
    return (
        <div className={styles["project-content"]}>
            <div className={styles["project-text"]}>
                <h2>{ name_ong }</h2>
                <div className={styles["project-title"]}>
                    <h4>{ name_project }</h4>
                    <p>Inicio: { startDate }</p>
                    <p>Fim: { endDate }</p>
                </div>
                <p>{ description }</p>
            </div>
            <a href="#" className={styles["project-link-interest"]}>Tenho interesse</a>
        </div>
    )
}

Card.propTypes = {
    name_ong: ProtoType.string.isRequired,
    name_project: ProtoType.string.isRequired,
    startDate: ProtoType.string.isRequired,
    endDate: ProtoType.string.isRequired,
    description: ProtoType.string.isRequired,
}


// export default function Card({name_ong, name_project, startDate, endDate, description}) {
//     return (
//             <div className={styles["project-content"]}>
//                 <div className={styles["project-text"]}>
//                     <h2>Nome da ong</h2>
//                     <div className={styles["project-title"]}>
//                         <h4>Nome do projeto</h4>
//                         <p>Inicio: 30/03/2024</p>
//                         <p>Fim: 07/04/2024</p>
//                     </div>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem beatae eaque voluptatem, corrupti quibusdam aspernatur repudiandae ad vero excepturi magni sapiente mollitia, fugit nobis quae saepe expedita at, temporibus ullam!</p>
                    
//                 </div>
//                 <a href="#" className={styles["project-link-interest"]}>Tenho interesse</a>
//             </div>
//         )
// }