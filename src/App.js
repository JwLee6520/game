import logo from './logo.svg';
import './App.css';

function App() {
const x = Math.flooer(Math.random() *3 + 1);
console.log(x);
  return (
    <div className="App">
      <u>가위바위보 시작!</u>
      <div className="container">
        <div className='scissors'><img src="img/images.png" alt="img" /><p>가위</p></div>
        <div className='rock'><img src="img/rock.jpeg" alt="img" /><p>바위</p></div>
        <div className='paper'><img src="img/paper.png" alt="img" /><p>보</p></div>
      </div>

    </div>
  );
}

export default App;
