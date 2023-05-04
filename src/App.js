import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./screens/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import RulesPage from "./screens/RulesPage.jsx";
import CardSets from "./screens/CardSetPage.jsx";
import DeckBuilderPage from "./screens/DeckBuilderPage.jsx";
import SignUp from "./screens/SignUpPage/SignUpPage.jsx";
import SignIn from "./screens/SignInPage/SignInPage.jsx";
import SignOut from "./screens/SignOutPage.jsx";
import { verifyUser } from "./services/users.js";
import axios from "axios";

/*
testing searchBar component
 */
import Search from "./components/Search.jsx";
import Bt2 from "./components/Sets/bt1/bt2";

function App() {
  const [user, setUser] = useState(null);
  const [cards, setCards] = useState([])

  const getInfo = async() =>{
    axios.get('https://digimon-api.herokuapp.com/')
    .then((res)=>setCards(res.data))
  }

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
    getInfo()
  }, []);

  console.log(user);

  return (
    <>
      <NavBar user={user} />

      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/cardsets" element={<CardSets user={user} />} />
        {user ? (
          <Route
            path={`/deck1/${user.id}`}
            element={<DeckBuilderPage user={user} />}
          />
        ) : null}
        <Route path='/search' element={<Search cards={cards}/>} />
        <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
        <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
        <Route path="/sign-out" element={<SignOut setUser={setUser} />} />
      </Routes>
    </>
  );
}

export default App;
