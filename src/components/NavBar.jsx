import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/rules">Rules</NavLink>
        <NavLink to="/cardsets">Card Sets</NavLink>
        <NavLink to="/deckbuilder">Deck Builder</NavLink>
        <NavLink to="deck">Deck</NavLink>
    </nav>
  )
}
