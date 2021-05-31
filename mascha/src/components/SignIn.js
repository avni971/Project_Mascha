import{Link} from 'react-router-dom'

import React from 'react'
import {auth} from '../firebase/firebase'
import "firebase/firestore";
import {Button} from 'react-bootstrap'



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
    // deletethisuser(){
    //     var user=auth.currentUser;
    //     console.log(user);
    //     user.delete();
        
    // }

    render(){
        
        return (
            <div>
               <h4>ADD USER</h4> 
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

               
                   
               }}/><label id="spa">admin?</label>

               <Button className="w-20" id="spa" type = "submit" onClick={()=>{
                        this.signin()
               }}>Create User/צור משתמש</Button>
                
                {/* <Button className="btn" id="spa" type = "submit" onClick={()=>{
                        this.deletethisuser()
               }}>Delete This User/מחק משתמש זה</Button> */}
               
               <Link to='/Login'><Button className="w-20">Back</Button></Link>
            </div>
        );
    }


}

const SignIn1 = () => {
   
}

export default SignIn
