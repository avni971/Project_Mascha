import{Link} from 'react-router-dom'
import {Form, Button, Card} from 'react-bootstrap'
import React, { useRef } from 'react'
import {auth} from '../firebase/firebase'
class Login extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log("In Did mount")
        // auth.onAuthStateChanged(user=>{
        //     if(user) 
        //     {
        //         console.log(user)
        //     } 
        //     else 
        //     {
        //         console.log("Not online.")
        //     } 
        // })
    }
    login()
    {
        
        // this.props.history.push("/about");
        
        // auth.signInWithEmailAndPassword("i@gmail.com","123456")
        auth.signInWithEmailAndPassword(document.getElementById("email").value,document.getElementById("password").value)
        .then(user=>{
            console.log(user)
            this.props.history.push({
                pathname:"/About",
                data:user,

            });
        }
            
        ).catch(err=>{
            console.log("email or password not correct")
        });
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
                        <div>
                            <Form.Group >
                                <Form.Label>Email</Form.Label>
                                <Form.Control id = "email" type = "email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control id = "password" type = "password"/>
                            </Form.Group>
                            <Button className = "w-100" type = "submit" onClick={()=>{this.login()}}>
                                Login
                            </Button>
                        </div>
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
// import{Link} from 'react-router-dom'
// import React from 'react'
// import {auth} from '../firebase/firebase'
// class Login extends React.Component{
//     constructor(props){
//         super(props) 

//     }

//     login(  )
//     {
//         console.log(document.getElementById("email").value);
//         // auth.signInWithEmailAndPassword(document.getElementById("email").value,document.getElementById("password").value).then(res=>{
//         //     console.log(res)
//         // })

//         // auth.createUserWithEmailAndPassword(email,password)
//         auth.onAuthStateChanged(user=>{
//             console.log(user)
//         })
//     }


//     render(){

//         return (
//             <div>
//                <h4>this is where our question form shall exist</h4> 
//                <input type="email" placeholder="eg:man1@gmail.com" id="email" onBlur={(event)=>{
//                    console.log(event.target.value)
//                }}/>
//                <input type="password" placeholder="123456" id="password" />

//                <button onClick={()=>{
//                         this.login()
//                }}>click me</button>
//                <Link to='/'>Back</Link>
//             </div>
//         );
//     }


// }

// const Login1 = () => {
   
// }

// export default Login
