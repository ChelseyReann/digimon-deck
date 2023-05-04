import { NavLink } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <nav>
      <div>
        {user && <div className="link welcome">Welcome, {user.username}</div>}
      </div>
      <NavLink to="/" activeclassname="active-link">
        Home
      </NavLink>
      <NavLink to="/rules" activeclassname="active-link">
        Rules
      </NavLink>
      <NavLink to="/cardsets" activeclassname="active-link">
        Card Sets
      </NavLink>
      {user ? (
        <NavLink to={`/deck1/${user.id}`} activeclassname="active-link">
           Deck
        </NavLink>
      ) : null}
      <NavLink to="/sign-up" activeclassname="active-link">
        Sign-up
      </NavLink>
      <NavLink to="/sign-in" activeclassname="active-link">
        Sign-in
      </NavLink>
    </nav>
  );
}
