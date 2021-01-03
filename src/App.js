import './App.css';
import Product from './lesson7/Product';
import ToDoList from './lesson8/ToDoList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Product name='banabas' price={1} description='Fresh bananas from Ecuador' />
        <div> 
          <ToDoList /> 
        </div>
      </header>
      
    </div>
  );
}

export default App;
