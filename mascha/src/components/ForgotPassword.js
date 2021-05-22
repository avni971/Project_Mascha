import{Link} from 'react-router-dom'

import React from 'react'
import {auth} from '../firebase/firebase'
import "firebase/firestore";
import {Button} from 'react-bootstrap'



class ForgotPassword extends React.Component{
    constructor(props){
        super(props) 
    }

    
    sendnewpassword(){
     var emailAddress=document.getElementById("emailaddress").value;
     console.log(emailAddress);
     auth.sendPasswordResetEmail(emailAddress).then(function() {
        var alertmessege="password reset email has been sent to: "
        alertmessege+=emailAddress;
        alert(alertmessege);
      }).catch(function(error) {
        var alertmessege="error:"
        alertmessege+=error;
        alert(alertmessege);
      });
    }

    render(){
        
        return (
            <div>
            <h2>Please enter your email address</h2>
            <input type="email" id="emailaddress"></input>
            <Button className="btn" id="spa" type = "submit" onClick={()=>{
                        this.sendnewpassword()
               }}>Send Email</Button>
                <Link to='/Login'><Button className="w-20">Back</Button></Link>
             </div>
   
            );
    }

}
const ForgotPassword1 = () => {
   
}

export default ForgotPassword
