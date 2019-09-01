import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import Logo from './Logo'

const Nav = props => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <Logo {...props.logoData} />
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {props.navLinks.map((navItem, i) => (
            <NavLink
              exact={navItem.exact}
              to={navItem.to}
              key={i}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-base"
            >
              {navItem.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  logoData: PropTypes.object,
  navLinks: PropTypes.array,
}

export default Nav
