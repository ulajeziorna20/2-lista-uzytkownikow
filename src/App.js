import logo from './logo.svg';
import './App.css';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <UsersList />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
