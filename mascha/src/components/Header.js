
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
            // <Button 
            // color={showAdd?'red':'green'}
            //  text={showAdd? 'Close':'Add'} onClick={onAdd} />
            <div></div>)}
             {/* <Button  text='hello1' />
            <Button color='red' text='hello3' /> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Mascha',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }
export default Header
