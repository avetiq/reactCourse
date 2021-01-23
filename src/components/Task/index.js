import React from 'react'
import styles from './styles.module.css';
import { Button } from 'react-bootstrap';


export default function Task(props) {

const [selected, setSelected] = React.useState(false); 
    

const handleSelection = (taskId) => {
    setSelected(!selected);
    props.clickedCheck(taskId);
};

    return (

        <div className={`${styles.centerTaskDiv} ${selected ? styles.selected : ''}`}>
            <div>
                <input
                    type="checkbox"
                    onChange={() => { handleSelection(props.task.id) }}
                />
            </div>
            <div className={styles.taskDiv}>
                <h3>{props.task.title}</h3>
                <Button
                    variant="danger"
                    onClick={() => props.deleteTask(props.task.id)}
                    disabled={props.disabled}
                >
                    Delete
                    </Button>
            </div>
        </div>

    );
}