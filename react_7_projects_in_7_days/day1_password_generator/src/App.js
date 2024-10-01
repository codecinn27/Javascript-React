import logo from './logo.svg';
import './App.css';
import PasswordGenerator from './PasswordGenerator';

function App() {
  return (
    <div className="App h-screen bg-gradient-to-r from-red-200 via-pink-200 to-pink-300">
      <h1 className='text-3xl font-bold pt-16 text-blue-900'>Password Generator</h1>
      <PasswordGenerator/>
    </div>
  );
}

export default App;
