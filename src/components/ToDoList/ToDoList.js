import React from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import styles from './styles.module.css';
import idGenerator from '../../helpers/idGenerator';

class ToDoList extends React.Component {

    state = {
        tasks: [],
        curInputValue: ''
    };

    handleChange = (e) => {
        this.setState({
            curInputValue: e.target.value
        });
    };

    handleClick = () => {
        //if empty string wants to submit
        if (this.state.curInputValue === '') {
            return;
        }
        //else we add the task to out array
        this.setState({
            tasks: [...this.state.tasks, {
                id: idGenerator(),
                title: this.state.curInputValue
            }],
            curInputValue: ''
        });
    };

    deleteTask = (taskId) => {
        const newTasks = this.state.tasks.filter((el) => el.id !== taskId);
        this.setState({
            tasks: newTasks
        });
    };

    render() {
        const { tasks, curInputValue } = this.state;
        return (
            <Container>
                <Row>
                    <input
                        type='text'
                        onChange={this.handleChange}
                        value={curInputValue}
                        className={styles.inputTaskName}
                    />
                    <Button
                        variant="success"
                        onClick={this.handleClick}
                    >
                        Submit
                    </Button>
                </Row>
                <Row>

                    {tasks.map((el) => (
                        <Col key={el.id} lg={3}>
                            <div className={styles.centerTaskDiv}>
                                <div>
                                <input
                                type="checkbox"
                                checked={this.state.isGoing} />
                            </div>
                                <div className={styles.taskDiv}>
                                    <h3>{el.title}</h3>
                                    <Button
                                        variant="danger"
                                        onClick={() => this.deleteTask(el.id)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    ))
                    }

                </Row>
            </Container>
        );
    }
}

export default ToDoList;