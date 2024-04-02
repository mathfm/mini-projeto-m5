import axios from 'axios';
import styles from './skills.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment';
import CardSkill from '../../components/cardSkill/cardSkill.component';

export default function Skills() {
    
    const [skill, setSkill] = useState([]);

    const formatedDateBr = (date) => {
        const formatDate = moment(date).format("DD/MM/YYYY");
        return formatDate;
    }

    const getSkills = async () => {

        try {
            const response = await axios.get('http://localhost:3000/skill');
            const { skills } = response.data;
            setSkill(skills);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getSkills();
    }, [])



    return (
        <div className={styles["skill-page"]}>
            <h3 className={styles["skill-page-title"]}>Ultimas skills registradas</h3>
            <div className={styles["skill-container"]}>
                {
                    skill.map(skill => {
                        return <CardSkill
                            key={skill.id}
                            title={skill.skill_name}
                            description={skill.description}
                            datePubished={formatedDateBr(skill.createdAt)} />
                    })
                }
            </div>
        </div>
    )
}


