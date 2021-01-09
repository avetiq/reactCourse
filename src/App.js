import ToDoList from './components/ToDoList/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  return (
    <div>
        <div className="mainDiv"> 
          <ToDoList /> 
        </div>      
    </div>
  );
}

export default App;
