import{Link} from 'react-router-dom'

import React from 'react'
import {auth, db} from '../firebase/firebase'
import "firebase/firestore";
import {Button} from 'react-bootstrap'



// document.addEventListener("DOMContentLoaded", function() {
//     getdbfromfirebase();
//   });
//   function getdbfromfirebase(){
//     db.collection("Forms").doc("question").get().then((ans)=>{
//         // console.log(ans.data());
//         // console.log(ans.data().answer);
//         if(ans.data())
//         {ans.data().quest.forEach(element=>{
//             let test = "<tr><td>";
//             test += element;
//             test += "</td></tr>";
//             let tr = document.createElement('tr')
//             let td = document.createElement('td')
//             td.textContent = element
//             tr.appendChild(td)
//             if(document.getElementById("stat_table"))
//             {document.getElementById("stat_table").appendChild(tr);}
//           console.log(element);
//             }
            
//             );  
//         } 
       
//     }
//     );
// }
class Statistics extends React.Component{
    constructor(props){
        super(props) 
    }
    componentDidMount(){
      

      db.collection("users").get().then((ans)=>{
        console.log(ans);
        ans.forEach(element => {
            if(element.exists){
            console.log(element);
            console.log(element.data());
            
            console.log(element.data().admins);
            element.data().users.forEach(e=>{
                console.log(e);
                let i = 0
                let test=e;
                let tr = document.createElement('tr')
                let td = document.createElement('td')
                td.classList.add("users_list");
                td.textContent = test
                tr.appendChild(td)
                document.getElementById("list_of_current_users").appendChild(tr); 
            })
            
            element.data().admins.forEach(e=>{
                console.log(e);
                let i = 0
                let test=e;
                let tr = document.createElement('tr')
                let td = document.createElement('td')
                td.classList.add("admins_list");
                td.textContent = test
                tr.appendChild(td)
                document.getElementById("list_of_current_admins").appendChild(tr); 
            })
        
          
            
        
        }
        }
            );
        

        }
            );
        }
       
      
    

    
 render(){
     return(
         <>
         <h1>statistics page</h1>
        <table id="stat_table">
            <th>תשובות/שאלות</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th>
            <div onLoad="load_Stat_Page()"></div>
        </table>
        <table><th id="list_of_current_users">users</th><th id="list_of_current_admins">admin?</th></table>
        
         </>
     );
 }   

}
 
export default Statistics