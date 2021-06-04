import{Link} from 'react-router-dom'
import {Form, Button, Card} from 'react-bootstrap'
 import React, { useRef } from 'react'
import firebase from "firebase/app";

import {auth} from '../firebase/firebase'
class Login extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log("In Did mount")
    }
    login()
    {  auth.signInWithEmailAndPassword(document.getElementById("email").value,document.getElementById("password").value)
        .then(user=>{
            console.log(user)
            this.props.history.push({
                pathname:"/Form",
                data:user,

            });
        }
            
        )
        .catch(err=>{
            alert("email or password are not correct")
            console.log("email or password are not correct")
        });
        console.log(auth.currentUser);
        
    }


    render(){
        
        return (
            <>
                <Card style = {{"text-align":"right"}}>
                    <Card.Body>
                        <h2 className = "text-center mb-4">התחברות</h2>
                        <div>
                            <Form.Group >
                                <Form.Label>מיל</Form.Label>
                                <Form.Control id = "email" type = "email" style = {{"text-align":"right"}}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>סיסמה</Form.Label>
                                <Form.Control id = "password" type = "password" style = {{"text-align":"right"}}/>
                            </Form.Group>
                            <Button className = "w-100" type = "submit" onClick={()=>{this.login()}}>
                            התחברות
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
                <Link to='/ForgotPassword' style={{"marginLeft":"45%"}}>לחץ כאן</Link>
                <label style={{"marginLeft":"3px"}}>? שכחתה סיסמה</label>
                 
                <br></br><Link to='/'><Button className='w-20 mr-40'>חזור</Button></Link>
            </>
        );
    }


}

const Login1 = () => {
   
}

export default Login