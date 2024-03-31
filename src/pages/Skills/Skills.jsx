import axios from 'axios';
import styles from './skills.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment';

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
           <h3>Usuarios registradas ate o momento</h3>
            <table className={styles["skill-table"]}>
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Descrição</th>
                        <th>Data de Registro</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        skill.map(skill => {
                            return (
                                <tr key={skill.id}>
                                    <th>{skill.skill_name}</th>
                                    <th>{skill.description}</th>
                                    <th>{formatedDateBr(skill.createdAt)}</th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


/*
      return (
        <div className={styles["skill-page"]}>
           <h3>Usuarios registradas ate o momento</h3>
            <table className={styles["skill-table"]}>
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Descrição</th>
                        <th>Data de Registro</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles["skill-info"]}>
                        <td>Javascript</td>
                        <td>linguagem de programação Multiparadigma</td>
                        <td>20/04/2024</td>
                    </tr>
                    <tr className={styles["skill-info"]}>
                        <td>Java</td>
                        <td>linguagem de programação Orientada a objetos</td>
                        <td>20/04/2024</td>
                    </tr>
                    <tr className={styles["skill-info"]}>
                        <td>Javascript</td>
                        <td>linguagem de programação Multiparadigma</td>
                        <td>20/04/2024</td>
                    </tr>
                    <tr className={styles["skill-info"]}>
                        <td>Javascript</td>
                        <td>linguagem de programação Multiparadigma</td>
                        <td>20/04/2024</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
  
 
 */