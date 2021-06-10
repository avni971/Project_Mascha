import { Route } from 'react-router-dom'
import { Button,Card,Form} from 'react-bootstrap'

import React from 'react'
import firebase from "firebase/app";
import {db} from '../firebase/firebase'
class Footer extends React.Component {

  componentDidMount() {

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // console.log("+");
        // console.log(user);

        var x = document.getElementById('signinbtn');

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

      }

    }//no user
    else{
      // console.log("-");
    }




    });


  }

  showcard()
  {
   let mycard=document.getElementById("card_add_div")
    mycard.classList.remove("card_add_disabled");
    mycard.classList.add("card_add_enabled");
  }

  render() {

    return (

      <div>
        <footer>

          <a href='/about'><Button className="w-20" id="spa">אודותנו</Button></a>

          <br></br>
          <Route exact path="/" render={() => <a href='/login'><Button className='w-20' style ={{"marginTop":"10px"}}>התחברות</Button></a>} />
          <br></br>

          <Route exact path="/form" render={() =>
            <a href='/areyousure'><Button id="deleteuserbtn" className='btn'>מחק משתמש זה</Button></a>} />

          <br></br><br></br>
          <Route exact path="/form" render={() =>
            <a href='/SignIn'><button id="signinbtn" disabled>צור משתמש</button></a>}
            />
           <br></br><br></br>
         
          <p>Copyright &copy; 2021</p>
          <Route exact path="/SignIn" render={() =>

            <a href='/signin/statistics'><button id="statistics">דף סטטיסטיקה</button></a>} />

        </footer>
      </div>
    );

  }
}

export default Footer
