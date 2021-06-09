import React from 'react'
import PropTypes from 'prop-types'
// import Button from './Button'
import { useLocation } from 'react-router-dom'
const Header = ({ title, onAdd, showAdd }) => {
  const location=useLocation() 
  return (
        <header className='header'>
          <script src="utf8.js"></script>

            <h1 className='m0'>{title}</h1>
            {location.pathname==='/' &&(
         
            <div></div>)}
         </header>
    )
}

Header.defaultProps = {
    title: 'Moshe',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }
export default Header
