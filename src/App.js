import logo from './logo.svg';
import './App.css';

function App() {
const scis = Math.random();

  return (
    <div className="App">
      <div className="container">
        <div className='scissors'><img src="img/images.png" alt="img" /></div>
        <div className='rock'><img src="img/rock.jpeg" alt="img" /></div>
        <div className='paper'><img src="img/paper.png" alt="img" /></div>
      </div>
    </div>
  );
}

export default App;
