import { Route } from 'react-router-dom'
//import {auth} from '../firebase/firebase'
const Footer = () => {


  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <a href='/about'>About</a>
    
      
    <Route exact path="/" render={() =><a href='/login'><button className='btn'>Login</button></a>} />
    <Route exact path="/form" render={() =><a href='/SignIn'><button id="signinbtn" className='btn'>SignIn</button></a>} /> 
    
    </footer>
  )
 
  //.then( ()=>{if(true)
    //{ }})
}

export default Footer