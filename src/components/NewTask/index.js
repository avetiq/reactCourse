import React from 'react';
import { Button} from 'react-bootstrap';
import styles from './styles.module.css';
import idGenerator from '../../helpers/idGenerator';

function NewTask(props) {
    const [text, setText] = React.useState('');

    const handleText = (event) => {
        setText(event.target.value);
    };

    const handleClick = () => {
        //if empty string wants to submit
        if (text === '') {
            return;
        }
        //else we add the task to out array
        const newTask = {
            id: idGenerator(),
            title: text,
        }
        setText('');
        props.handleClick(newTask);
    };

    const handleEnter = (event) => {
        if(event.key === "Enter"){
            handleClick();
        }
    }

    return (
        <div>
            <input
                type='text'
                onChange={handleText}
                value={text}
                className={styles.inputTaskName}
                onKeyDown={handleEnter}
                disabled={props.disabled}
            />
            <Button
                variant="success"
                onClick={handleClick}
                disabled={props.disabled}
            >
            Submit
            </Button>
        </div>
    );

};

export default NewTask;
