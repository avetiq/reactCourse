import React from 'react';
import { Container, Row, Button, Col} from 'react-bootstrap';
import styles from './styles.module.css';
import Task from '../Task'
import NewTask from '../NewTask/';

class ToDoList extends React.Component {

    state = {
        tasks: [],
        checkedTasks: new Set()
    };


    handleClick = (newTask) => {
        this.setState({
            tasks: [...this.state.tasks, newTask]
        });
    }

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

    

    render() {
        const { tasks, } = this.state;
        return (
            <Container>
                <Row>
                    <NewTask 
                        handleClick={this.handleClick}
                        disabled={this.state.checkedTasks.size !== 0}
                    />
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
                            <Task
                                task={el}
                                clickedCheck={this.clickedCheck}
                                deleteTask={this.deleteTask}
                                disabled={this.state.checkedTasks.size !== 0}
                            />
                        </Col>
                    ))
                    }
                </Row>
            </Container>
        );
    }
}

export default ToDoList;