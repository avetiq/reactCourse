import './App.css';
import Address from './Address';
import {Title} from './Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title
        name='Our first react component function'  
        />  
        <Address
        city='Yerevan'
        country='Armenia'
        />
      </header>
    </div>
  );
}

export default App;
