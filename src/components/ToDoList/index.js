import React from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import styles from './styles.module.css';
import idGenerator from '../../helpers/idGenerator';

class ToDoList extends React.Component {

    state = {
        tasks: [],
        curInputValue: '',
        checkedTasks: new Set()
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

    deleteMultipleTasks = () => {
        const {checkedTasks, tasks} = this.state;
        const newTasks = tasks.filter((el) => {
            return !(checkedTasks.has(el.id));
        });
        
        this.setState({
            tasks: newTasks,
            checkedTasks: new Set()
        });
    };

    clickedCheck = (taskId) => {
        const {checkedTasks} = this.state;
        const newCheckedTasks = new Set(checkedTasks);
        if(newCheckedTasks.has(taskId)){
            newCheckedTasks.delete(taskId);
        }else{
            newCheckedTasks.add(taskId);
        }

        this.setState({
            checkedTasks: newCheckedTasks,
        });

    };

    handleEnter = (event) => {
        if(event.key === "Enter"){
            this.handleClick();
        }
    }

    render() {
        const { tasks, curInputValue } = this.state;
        return (
            <Container>
                <Row>
                    <div>
                    <input
                        type='text'
                        onChange={this.handleChange}
                        value={curInputValue}
                        className={styles.inputTaskName}
                        // onKeyDown={(e) => {
                        //     if(e.key === "Enter"){
                        //         this.handleClick();
                        //     }
                        // }}
                        onKeyDown={this.handleEnter}
                    />
                    <Button
                        variant="success"
                        onClick={this.handleClick}
                        disabled={this.state.checkedTasks.size !== 0}
                    >
                        Submit
                    </Button>
                    </div>
                    <Button
                        className={styles.deleteMulitpleButton}
                        variant="danger"
                        onClick={this.deleteMultipleTasks}
                        disabled={this.state.checkedTasks.size === 0}
                    >
                        Delete Multiple Tasks
                    </Button>
                </Row>
                <Row>

                    {tasks.map((el) => (
                        <Col key={el.id} lg={3}>
                            <div className={styles.centerTaskDiv}>
                                <div>
                                <input
                                type="checkbox"
                                onChange={()=>{this.clickedCheck(el.id)}}
                                />
                            </div>
                                <div className={styles.taskDiv}>
                                    <h3>{el.title}</h3>
                                    <Button
                                        variant="danger"
                                        onClick={() => this.deleteTask(el.id)}
                                        disabled={this.state.checkedTasks.size !== 0}
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