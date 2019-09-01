import React from 'react'
import Nav from '../../components/Header/Nav';

const logoData = {
  text: 'Users App',
  svgWidth: 54,
  svgHeight: 54,
  svgViewBox: '0 0 54 54',
  svgPath:
    'M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z',
}

const navLinks = [
  {
    name: 'Home',
    exact: true,
    to: '/',
  },
  {
    name: 'About',
    exact: false,
    to: '/about',
  },
]

const Header = props => {
  return <Nav logoData={logoData} navLinks={navLinks} />
}

export default Header
