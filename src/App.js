import logo from './logo.svg';
import './App.css';
import {Links, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/"></Route>
        <Route path="/rules"></Route>
        <Route path="/cardsets"></Route>
        <Route path="/deckbuilder"></Route>
        <Route path="deck"></Route>
      </Routes>
    </>
  );
}

export default App;
