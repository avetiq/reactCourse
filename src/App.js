import './App.css';
import Address from './Address';
import Product from './lesson7/Product';
import {Title} from './Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Product name='banabas' price={1} description='Fresh bananas from Ecuador' />
      </header>
    </div>
  );
}

export default App;
