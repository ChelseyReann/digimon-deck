import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
        <NavLink to="/" activeClassName="active-link">Home</NavLink>
        <NavLink to="/rules" activeClassName="active-link">Rules</NavLink>
        <NavLink to="/cardsets" activeClassName="active-link">Card Sets</NavLink>
        <NavLink to="/deckbuilder" activeClassName="active-link">Deck Builder</NavLink>
        <NavLink to="deck" activeClassName="active-link">Deck</NavLink>
    </nav>
  )
}
