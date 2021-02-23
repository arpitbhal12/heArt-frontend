import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;
