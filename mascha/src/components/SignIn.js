import{Link} from 'react-router-dom'

import React from 'react'
import {auth} from '../firebase/firebase'
import "firebase/firestore";

// const firebase = require('firebase/app');
// require('firebase/auth');
//  var admin = require( 'firebase-admin' );
//  admin.initializeApp();

class SignIn extends React.Component{
    constructor(props){
        super(props) 

        
    }
//wow it works
    signin(  )
    {

        //the switch cause we dont get it right in the input onClick function
        if(document.getElementById("admincheckbox").value==="off")
        {
            document.getElementById("admincheckbox").value2="true"
        }
        if(document.getElementById("admincheckbox").value==="on")
        {
            document.getElementById("admincheckbox").value2="false"
        }
        var email=document.getElementById("email").value;
        var password=document.getElementById("password").value;
        console.log(document.getElementById("email").value);
        console.log(document.getElementById("password").value);
        console.log(document.getElementById("admincheckbox").value2);
        
        // auth.signInWithEmailAndPassword(document.getElementById("email").value,document.getElementById("password").value).then(res=>{
          //   console.log(res)
         //})
      
        auth.createUserWithEmailAndPassword(email,password).then((userCredential) => {
            let alertmessege="User created email: ";
            alertmessege+=email;
            alertmessege+=" ,password";
            
            alertmessege+=password;
            alert(alertmessege);
            // console.log(userCredential.credential.h);
        //     if(document.getElementById("admincheckbox").value2!=null)
        //     {userCredential.credential.h=document.getElementById("admincheckbox").value2;
        //       console.log(userCredential.credential.h);
        //    // user.gb=document.getElementById("admincheckbox").value2;
        //     }
            
              })
              .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                alert(errorMessage);
              });
              
         auth.onAuthStateChanged(user=>{
           
            console.log(user)
            user.updateProfile({
                displayName: document.getElementById("admincheckbox").value2,
              }).then(function() {
                // Update successful.
              }).catch(function(error) {
                // An error happened.
              });
            
         })
    }

//    deleteuser()
//    {
//    var email=document.getElementById("email").value;
//    console.log(email);
//    var uid=admin.auth().getUserByEmail(email);
//    console.log(uid);
// admin.auth().deleteUser(uid).then((userCredential)=>{
//     let alertmessege="User deleted email: ";
//     alertmessege+=email;
//     alert(alertmessege);
// }).catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorCode);
//     alert(errorMessage);
//   });
  

//     }
    render(){
        
        return (
            <div>
               <h4>this is where we create users</h4> 
               <input type="email" placeholder="example@gmail.com" id="email" onBlur={(event)=>{
                   console.log(event.target.value)
               }}/>
               <input type="password" placeholder="6lettersatleast" id="password" />
               
               <input type="checkbox" className="checkbox" id="admincheckbox" value2="false"  onChange={(event)=>{

                   //for some reason it's the complete opposite of what we want so we will switch it on sigin()
                   if(event.target.value==="on" )
                   {
                 event.target.value="off";
                       }
                       else if(event.target.value==="off") 
                       { event.target.value="on";}
                       
                       console.log(event.target.value);

               
                   
               }}/><label>admin?</label>

               <button className="btn" onClick={()=>{
                        this.signin()
               }}>Create User/צור משתמש</button>
                
                 {/* <button className="btn" onClick={()=>{
                        this.deleteuser()
               }}>Delete User/מחק משתמש</button>
                */}
               <Link className="btn" to='/Login'>Back</Link>
            </div>
        );
    }


}

const SignIn1 = () => {
   
}

export default SignIn
