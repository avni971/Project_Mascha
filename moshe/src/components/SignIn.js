import{Link} from 'react-router-dom'

import React from 'react'
import {auth} from '../firebase/firebase'
import "firebase/firestore";
import {Button} from 'react-bootstrap'
import {db} from '../firebase/firebase'
import firebase from "firebase/app";
import Footer from './Footer'


class SignIn extends React.Component{
 
alterdb(email,adminstatus){
  console.log("in");
  console.log(adminstatus);
  console.log(email);
  
var newusertodb = db.collection("users").doc("users");

let user=[email];
//Atomically add a new email and admin_status to the "users" array field.
newusertodb.update({
    users: firebase.firestore.FieldValue.arrayUnion(...user),
});

// // Atomically remove a region from the "regions" array field.

if(adminstatus==="true")
{
  //Atomically add a new email and admin_status to the "admins" array field.
  newusertodb.update({
      admins: firebase.firestore.FieldValue.arrayUnion(...user),
  });
}
if(adminstatus==="false")
{
  //Atomically remove a new email and admin_status to the "admins" array field.
  newusertodb.update({
    admins: firebase.firestore.FieldValue.arrayRemove(...user),
});
}
 console.log(newusertodb); 


}
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
                alert("error message: "+errorMessage+"error code : "+errorCode);
              });
              
         auth.onAuthStateChanged(user=>{
           
              this.alterdb(email,document.getElementById("admincheckbox").value2);
         })
    }
  

    render(){
        
        return (
            <div>
               <h4>ADD USER</h4> 
               <input type="email" placeholder="example@gmail.com" id="email" onBlur={(event)=>{
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
                       

               
                   
               }}/><label id="spa">admin?</label>

               <Button className="w-20" id="spa" type = "submit" onClick={()=>{
                        this.signin()
               }}>Create User/צור משתמש</Button>
                
                
               
               <Link to='/Login'><Button className="w-20">Back</Button></Link>
               <Footer/>
            </div>
       
       );
    }


}

export default SignIn
