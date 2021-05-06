import{Link} from 'react-router-dom'
import {Form, Button, Card} from 'react-bootstrap'
import React from 'react'
import {auth} from '../Firebase/firebase'
class Login extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log("In Did mount")
        auth.onAuthStateChanged(user=>{
            if(user) 
            {
                console.log(user)
            } 
            else 
            {
                console.log("Not online.")
            } 
        })
    }
    login()
    {
        console.log(document.getElementById("email").value);
        this.props.history.push("/about");
        auth.signInWithEmailAndPassword(document.getElementById("email").value,document.getElementById("password").value).then(this.props.history.push("/about"));
        //     console.log(res)
        // })
        // auth.createUserWithEmailAndPassword(email,password)
        
    }


    render(){
        
        return (
            <>
                <Card>
                    <Card.Body>
                        <h2 className = "text-center mb-4">Login</h2>
                        <Form>
                            <Form.Group id = "email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type = "email" />
                            </Form.Group>
                            <Form.Group id = "password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type = "password"/>
                            </Form.Group>
                            <Button className = "w-100" type = "submit" onClick={()=>{this.login()}}>
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className = "w-100 text-center mt-2">
                    Forgot you Email or Password ? Click here.
                </div>
                <Link to='/'>Go Back</Link>
            </>
            // <div>
            //    <h4>this is where our question form shall exist</h4> 
            //    <input type="email" placeholder="eg:man1@gmail.com" id="email" onBlur={(event)=>{
            //        console.log(event.target.value)
            //    }}/>
            //    <input type="password" placeholder="123456" id="password" />

            //    <button onClick={()=>{
            //             this.login()
            //    }}>click me</button>
            //    <Link to='/'>Go Back</Link>
            // </div>
        );
    }


}

const Login1 = () => {
   
}

export default Login

