import { Route } from 'react-router-dom'
import { Button,Card,Form} from 'react-bootstrap'

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
        var y = document.getElementById('show_add_card')
        console.log(x);
        console.log(y);
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


      if (y)
      {
        db.collection('users').get().then((ans) => {
          ans.forEach(element => {
            if(element){
              console.log(element);
              if(element.data()){
                
                if(element.data().admins)
                {
                 
                  
                  if(element.data().admins.includes(user.email))
                  {
                             
                             y.disabled = false;  
                             console.log("user status is admin");
                  }
                  else            {
                            y.disabled = true;  
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
      console.log("-");
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
            <a href='/SignIn'><button id="signinbtn" disabled>צור משתמש</button></a>}
            />
           <br></br><br></br> 
          <Route exact path="/form" render={() =>
           <button id="show_add_card" onClick={()=>this.showcard()} disabled>הוסף שאלה</button>}
            />
<Route exact path="/form" render={() =>
<div id="card_add_div" className="card_add_disabled">

           <Card style= {{"marginTop" : "55px","borderColor":"#66CDAA" }}>
                <Card.Body>

                    <Form>
                        <Form.Label className = "pQ">הוספת/מחיקה שאלה :</Form.Label>
                        <Form.Control id = "add" style = {{"borderColor":"#66CDAA"}}/>
                    </Form>
    
                    <Card style = {{"width": "20%","display": "inline-block", "borderColor":"#66CDAA"}}>
                        <Card.Body>
                            <Form>
                                <Form.Label className = "pQ" >כמה בחירות לשאלה ?</Form.Label>
                                <Form.Control type="number" onChange = {()=>{this.questionNum(document.getElementById("numQuest").value)}} id = "numQuest" style = {{"borderColor":"#66CDAA"}}/>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Card style = {{"width": "20%","display": "inline-block", "borderColor":"#66CDAA"}}>
                       
                        <Card.Body>
                            <Form>
                                <Form.Label className = "pQ" >איזה אזור לשאלה ?</Form.Label>
                                <Form.Control type="number" onChange = {()=>{this.zone(document.getElementById("zone").value)}} id = "zone" style = {{"borderColor":"#66CDAA"}}/>
                            </Form>
                        </Card.Body>
                    </Card>
                    
                    <Card style = {{"marginRight":"10%","display": "inline-block","width": "60%", "borderColor":"#66CDAA"}}>
                        <Card.Body>
                            <Form id ="plusQ">
                            <Form.Label className = "pQ" >תשובות :</Form.Label>

                            </Form>
                        </Card.Body>
                    </Card>

                    <Button className = "w-15" style= {{"display" : "inline-block","marginRight" : "40%", "marginTop" : "10px","backgroundColor" : "#66CDAA", "borderColor":"#66CDAA"}} type = "submit" 
                         onClick={()=>{this.writeData(document.getElementById("add").value,document.getElementById("numQuest").value,document.getElementById("zone").value)}}>הוספה</Button>
                    <Button className = "w-15" style= {{"display" : "inline-block","marginRight" : "7%", "marginTop" : "10px", "backgroundColor" : "red", "borderColor":"red"}} type = "submit" 
                         onClick={()=>{this.suppData(document.getElementById("add").value,document.getElementById("numQuest").value)}}>מחיקה</Button>

                </Card.Body> 
            </Card>  
</div>
  }  />
          <p>Copyright &copy; 2021</p>
          <Route exact path="/signin" render={() =>
            
            <a href='/signin/statistics'><button id="statistics">דף סטטיסטיקה</button></a>} />
        
        </footer>
      </>
    );

  }
}

export default Footer