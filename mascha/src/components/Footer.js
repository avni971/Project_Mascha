import { Route } from 'react-router-dom'
import { Button, } from 'react-bootstrap'
import React, {  } from 'react'
import firebase from "firebase/app";
import {db} from '../firebase/firebase'
class Footer extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  // const Footer = () => {
  componentDidMount() {
    // console.log("In Did mount");
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("+");
        console.log(user);

        var x = document.getElementById('signinbtn');
        console.log(x);
        if (x)
{
  db.collection('users').get().then((ans) => {
    console.log(ans);
    ans.forEach(element => {
      if(element){
        console.log(element);
        if(element.data()){
          console.log(element.data());
          if(element.data().admins)
          {
            console.log(element.data().admins);
            console.log(user.email);
            console.log(element.data().admins.includes(user.email));
            
            if(element.data().admins.includes(user.email))
            {
                       x.classList.remove("disabled");
                       x.disabled = false;  
                       console.log("user status is admin");
            }
            else            {
                      x.classList.add("disabled");
                      x.disabled = true;  
                      console.log("user status is not admin");
            }
          }
        }
      }
    });
  });
  // if(user.email in )
        //   if (user.displayName.toString() === "false") {
        //     document.getElementById("signinbtn").classList.add("disabled")
        //     x.disabled = true;
        //   }
        //   else if (user.displayName.toString() === "true" && document.getElementById("signinbtn").classList != null) {
        //     document.getElementById("signinbtn").classList.remove("disabled");
        //     x.disabled = false;
        //   }
        // console.log(document.getElementById("signinbtn").classList);
        // console.log(x.disabled);
      } 
//       var y = document.getElementById('addQuestionBtn');
//       console.log(y);
//       if (y)
// {
//         if (user.displayName.toString() === "false") {
//           document.getElementById("addQuestionBtn").classList.add("disabled")
//           y.disabled = true;
//         }
//         else if (user.displayName.toString() === "true" && document.getElementById("addQuestionBtn").classList != null) {
//           document.getElementById("addQuestionBtn").classList.remove("disabled");
//           y.disabled = false;
//         }
//       console.log(document.getElementById("addQuestionBtn").classList);
//       console.log(y.disabled);
//     } 

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
          
          <a href='/about'><Button className="w-20" id="spa">אודותנו</Button></a>

          <br></br>
          <Route exact path="/" render={() => <a href='/login'><Button className='w-20' style ={{"marginTop":"10px"}}>התחברות</Button></a>} />
          <br></br>

          <Route exact path="/form" render={() =>
            <a href='/areyousure'><Button id="deleteuserbtn" className='btn'>מחק משתמש זה</Button></a>} />
          
          <br></br><br></br>
          <Route exact path="/form" render={() =>
          
            <a href='/SignIn'><button id="signinbtn" disabled>צור משתמש</button></a>} />
          <p>Copyright &copy; 2021</p>
          <Route exact path="/signin" render={() =>
            
            <a href='/signin/statistics'><button id="statistics">דף סטטיסטיקה</button></a>} />
        
        </footer>
      </>
    );

  }
}

export default Footer