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

        console.log("onload");
        db.collection("Forms").get().then((ans)=>{
        let elementalredyexist;
        let mynumarray=[];
        let myarray=[];
        ans.forEach(element => {
            if(element.exists){
                    { if(element.data())
                        {   
                            console.log(element.data().quest);
                            myarray.push(element.data().numQuest);
                            mynumarray.push(element.data().numQuest);
                            // console.log(myarray);
                             console.log(element.data().numQuest);
                            // console.log(element.data().answers);
                            db.collection("stat").get().then((res)=>{
                                res.forEach(e => {
                                    if(e.exists){
                                        if(e.data())
                                        {
//                 for(let i=0;i<10;i++)
// {                           
// db.collection('stat').doc(i).set({
//     quest: myarray[i],
//     numQuest : mynumarray[i],
//     answers : [0,0,0,0,0]
//     }, { merge: true });
                        //    }                           //console.log(e.data().quest);
                                            // if(myarray.includes(e.data().numQuest))
                                            // {
                                            //     elementalredyexist=true;
                                            //     console.log(elementalredyexist);
                                            // }
                                            // else if(!myarray.includes(e.data().numQuest)) {
                                            //     elementalredyexist=false;
                                            //     console.log(elementalredyexist);
                                            //     // Add a new document in collection "cities"

                                                // // db.collection("stat").add(
                                                // //     {
                                                // //         quest: element.data().quest,
                                                // //         numQuest : element.data().numQuest,
                                                // //         answers : [0,0,0,0,0]
                                                // //     }
                                                
                                                // );
                                            // }
                                        }
                                    }
                                }
                                );
                            }
                            );
                            

                          
                         }
                    }
            }
    });
}
    );
    //getting the questions list and quest num to our stat list
       db.collection("stat").get().then((ans)=>{
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
                td.classList.add("users_list");
                td.textContent = test
                tr.appendChild(td)
                document.getElementById("list_of_current_users").appendChild(tr); 
            })
            
            element.data().admins.forEach(e=>{
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
        <table id="stat_table" onLoad={this.onload}>
            <tr><th>מספר שאלה</th><th>שאלה</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
            
        </table>
        <br></br><br></br><br></br>
        <table><th id="list_of_current_users">users</th><th id="list_of_current_admins">admin?</th></table>
        
         </>
     );
 }   

}
 
export default Statistics