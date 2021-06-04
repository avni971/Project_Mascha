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
    //getting the questions list and quest num to our stat list

       db.collection("Forms").get().then((ans)=>{
        ans.forEach(element => {
            if(element.exists){
                { if(element.data())
                    {
                         console.log(element.data().quest);
                         //console.log(element.data().numQuest);
                        let tr = document.createElement('tr');
                        let td = document.createElement('td');
                        tr.appendChild(td);
                        td.textContent=element.data().numQuest;
                        let td2 = document.createElement('td');
                        tr.appendChild(td2);
                        td2.textContent=element.data().quest;
                        let td3 = document.createElement('td');
                        tr.appendChild(td3);
                        
                        let td4 = document.createElement('td');
                        tr.appendChild(td4);
                        
                        let td5 = document.createElement('td');
                        tr.appendChild(td5);
                        
                        let td6 = document.createElement('td');
                        tr.appendChild(td6);
                        
                        let td7 = document.createElement('td');
                        tr.appendChild(td7);

                        if(element.data().answersstats)
                        {td3.textContent=element.data().answersstats[0];
                        td4.textContent=element.data().answersstats[1];
                        td5.textContent=element.data().answersstats[2];
                        td6.textContent=element.data().answersstats[3];
                        td7.textContent=element.data().answersstats[4];
                        }
                        else{
                        td3.textContent=0;
                        td4.textContent=0;
                        td5.textContent=0;
                        td6.textContent=0;
                        td7.textContent=0;
                    }
                        document.getElementById("stat_table").appendChild(tr); 

                        
                    }
                }
            }
       }
        );
    }
       );


//users and admin lists
      db.collection("users").get().then((ans)=>{
        ans.forEach(element => {
            if(element.exists){
          
            element.data().users.forEach(e=>{
                let i = 0
                let test=e;
                let tr = document.createElement('tr')
                let td = document.createElement('td')
                // td.classList.add("users_list");
                td.textContent = test
                tr.appendChild(td)
                document.getElementById("list_of_current_users").appendChild(tr); 
            })
            
            element.data().admins.forEach(e=>{
                let i = 0
                let test=e;
                let tr = document.createElement('tr')
                let td = document.createElement('td')
                // td.classList.add("admins_list");
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
        <table id="stat_table" onLoad={this.onload}>
            <tr><th>מספר שאלה</th><th>שאלה</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
            
        </table>
        <br></br><br></br><br></br>
        <table id="users_admin_table"><th id="list_of_current_users">users</th><th id="list_of_current_admins">admin?</th></table>
        
         </>
     );
 }   

}
 
export default Statistics