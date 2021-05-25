import { Route } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import React, { useRef } from 'react'
import { auth } from '../firebase/firebase'
import firebase from "firebase/app";

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  // const Footer = () => {
  componentDidMount() {
    // console.log("In Did mount");
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("+");
        console.log(user);
        //console.log(document.getElementById("signinbtn"));
        //console.log(document.getElementById("signinbtn").classList);
        console.log(user.displayName.toString());

        var x = document.getElementById('signinbtn');
        console.log(x);
        if (x)
{
          if (user.displayName.toString() === "false") {
            document.getElementById("signinbtn").classList.add("disabled")
            x.disabled = true;
          }
          else if (user.displayName.toString() === "true" && document.getElementById("signinbtn").classList != null) {
            document.getElementById("signinbtn").classList.remove("disabled");
            x.disabled = false;
          }
        console.log(document.getElementById("signinbtn").classList);
        console.log(x.disabled);
      } 
    }else{
      console.log("-");
    }

    });


    //your problem is not being able to recive the current user


  }

  render() {


    return (

      <>
        <footer>
          <a href='/about'><Button className="w-20" id="spa">About Us</Button></a>

          <br></br>
          <Route exact path="/" render={() => <a href='/login'><Button className='w-20'>Login</Button></a>} />
          <br></br>
          
          
          <Route exact path="/form" render={() =>
            <a href='/areyousure'><Button id="deleteuserbtn" className='btn'>מחק משתמש זה/delete this user</Button></a>} />
          
          <br></br><br></br>
          <Route exact path="/form" render={() =>
            //onload={()=>{this.isadmin()}}
            <a href='/SignIn'><button id="signinbtn" disabled>signin /צור משתמש</button></a>} />
          <p>Copyright &copy; 2021</p>

        </footer>
      </>
    );

  }
}

export default Footer