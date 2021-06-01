import{Link} from 'react-router-dom'

import React from 'react'
import {auth, db} from '../firebase/firebase'
import "firebase/firestore";
import {Button} from 'react-bootstrap'



document.addEventListener("DOMContentLoaded", function() {
    getdbfromfirebase();
  });
  function getdbfromfirebase(){
    db.collection("Forms").doc("question").get().then((ans)=>{
        // console.log(ans.data());
        // console.log(ans.data().answer);
        
        ans.data().quest.forEach(element=>{
            let test = "<tr><td>";
            test += element;
            test += "</td></tr>";
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            td.textContent = element
            tr.appendChild(td)
            if(document.getElementById("stat_table"))
            {document.getElementById("stat_table").appendChild(tr);}
          console.log(element);
            }
            
            );   
       
    }
    );
}
class Statistics extends React.Component{
    constructor(props){
        super(props) 
    }
    
    
 render(){
     return(
         <>
         <h1>statistics page</h1>
        <table id="stat_table">
            <th>תשובות/שאלות</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th>
        </table>
         </>
     );
 }   

}
 
export default Statistics