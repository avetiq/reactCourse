import './App.css';
import Address from './Address';
import Product from './Product';
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

        <Product name='banabas' price='1$' description='Fresh bananas from Ecuador' />
      </header>
    </div>
  );
}

export default App;
