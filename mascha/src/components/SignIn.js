import{Link} from 'react-router-dom'

import React from 'react'
import {auth} from '../firebase/firebase'

// const firebase = require('firebase/app');
// require('firebase/auth');
// var admin = require( 'firebase-admin' );
// admin.initializeApp();

class SignIn extends React.Component{
    constructor(props){
        super(props) 

    }
//wow it works
    signin(  )
    {
        var email=document.getElementById("email").value;
        var password=document.getElementById("password").value;
        console.log(document.getElementById("email").value);
        console.log(document.getElementById("password").value);
        
        // auth.signInWithEmailAndPassword(document.getElementById("email").value,document.getElementById("password").value).then(res=>{
          //   console.log(res)
         //})
      
        auth.createUserWithEmailAndPassword(email,password).then((userCredential) => {
            let alertmessege="User created email: ";
            alertmessege+=email;
            alertmessege+=" ,password";
            alertmessege+=password;
            alert(alertmessege);
         
              })
              .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                alert(errorMessage);
              });
           
         auth.onAuthStateChanged(user=>{
             console.log(user)
         })
    }
   deleteuser()
   {
    alert("delte user is not ready yet")
    }
    render(){

        return (
            <div>
               <h4>this is where we create users</h4> 
               <input type="email" placeholder="eg:man1@gmail.com" id="email" onBlur={(event)=>{
                   console.log(event.target.value)
               }}/>
               <input type="password" placeholder="123456" id="password" />

               <button className="btn" onClick={()=>{
                        this.signin()
               }}>Create User/צור משתמש</button>
                
                 <button className="btn" onClick={()=>{
                        this.deleteuser()
               }}>Delete User/מחק משתמש</button>
               
               <Link className="btn" to='/'>&#xf104</Link>
            </div>
        );
    }


}

const SignIn1 = () => {
   
}

export default SignIn
