import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
        <NavLink to="/" activeclassname="active-link">Home</NavLink>
        <NavLink to="/rules" activeclassname="active-link">Rules</NavLink>
        <NavLink to="/cardsets" activeclassname="active-link">Card Sets</NavLink>
        <NavLink to="/deckbuilder" activeclassname="active-link">Deck Builder</NavLink>
        <NavLink to="deck" activeclassname="active-link">Deck</NavLink>
    </nav>
  )
}
