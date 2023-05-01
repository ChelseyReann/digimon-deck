import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Home from './screens/Home.jsx';
import NavBar from './components/NavBar.jsx';
import RulesPage from './screens/RulesPage.jsx';
import CardSets from './screens/CardSetPage.jsx';
import DeckBuilderPage from './screens/DeckBuilderPage.jsx';
import SignUp from './screens/SignUpPage.jsx';
import SignIn from './screens/SignInPage.jsx';
import SignOut from './screens/SignOutPage.jsx';
import { verifyUser } from './services/users.js';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])


  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/rules" element={<RulesPage/>}></Route>
        <Route path="/cardsets" element={<CardSets/>}></Route>
        <Route path="/deckbuilder" element={<DeckBuilderPage/>}></Route>
        <Route path="deck"></Route>
        <Route path="/sign-up" element={<SignUp setUser={setUser}/>}/>
        <Route path="/sign-in" element={<SignIn setUser={setUser}/>}/>
        <Route path="/sign-out" element={<SignOut setUser={setUser}/>} />
      </Routes>
    </>
  );
}

export default App;
