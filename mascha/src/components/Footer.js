import { Route } from 'react-router-dom'
import {Button} from 'react-bootstrap'
//import {auth} from '../firebase/firebase'
const Footer = () => {

//   const styles = {
//     margin-right: 10px;
// }
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <a href='/about'><Button className="w-20 mr-40">About</Button></a>
      {/* <Button className = "w-20" type = "submit" onClick={()=>{props.history.push({
                pathname:"/About"
                
            });}}>
               About
            </Button> */}
    
      
    <Route exact path="/" render={() =><a href='/login'><Button className='w-20'>Login</Button></a>} />
    <Route exact path="/form" render={() =><a href='/SignIn'><Button id="signinbtn" className='btn'>SignIn</Button></a>} /> 
    
    </footer>
  )
 
  //.then( ()=>{if(true)
    //{ }})
}

export default Footer