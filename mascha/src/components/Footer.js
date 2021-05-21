import { Route } from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Footer = () => {

//   const styles = {
//     margin-right: 10px;
// }


  return (
    <footer>
      <a href='/about'><Button className="w-20" id="spa">About Us</Button></a>
 
      
    <Route exact path="/" render={() =><a href='/login'><Button className='w-20'>Login</Button></a>} />
    <Route exact path="/form" render={() =>
    <a href='/SignIn'><Button id="signinbtn" className='btn'>SignIn</Button></a>} /> 
   <Route exact path="/form" render={() =>
    <a href='/areyousure'><Button id="deleteuserbtn" className='btn'>מחק משתמש זה/delete this user</Button></a>} /> 
    <p>Copyright &copy; 2021</p>
    </footer>
  )
 
  //.then( ()=>{if(true)
    //{ }})
}

export default Footer