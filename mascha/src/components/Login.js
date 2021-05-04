import{Link} from 'react-router-dom'

import React from 'react'
import {auth} from '../firebase/firebase'
class Login extends React.Component{
    constructor(props){
        super(props) 

    }

    login(  )
    {
        console.log(document.getElementById("email").value);
        // auth.signInWithEmailAndPassword(document.getElementById("email").value,document.getElementById("password").value).then(res=>{
        //     console.log(res)
        // })

        // auth.createUserWithEmailAndPassword(email,password)
        auth.onAuthStateChanged(user=>{
            console.log(user)
        })
    }


    render(){

        return (
            <div>
               <h4>this is where our question form shall exist</h4> 
               <input type="email" placeholder="eg:man1@gmail.com" id="email" onBlur={(event)=>{
                   console.log(event.target.value)
               }}/>
               <input type="password" placeholder="123456" id="password" />

               <button onClick={()=>{
                        this.login()
               }}>click me</button>
               <Link to='/'>Go Back</Link>
            </div>
        );
    }


}

const Login1 = () => {
   
}

export default Login
