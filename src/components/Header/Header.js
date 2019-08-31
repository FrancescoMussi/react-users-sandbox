import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = props => {

  return (
    <ul className="flex">
      <li className="mr-6">
        <NavLink exact to="/">Home</NavLink>
      </li>
    </ul>
  )
}

export default Header;