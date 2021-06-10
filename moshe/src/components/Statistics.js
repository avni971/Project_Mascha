
import React from 'react'
import {db} from '../firebase/firebase'
import "firebase/firestore";


class Statistics extends React.Component{
 
     

    componentDidMount(){

        
        db.collection("Forms").get().then((ans)=>{
            ans.forEach(element => {
                if(element.exists){
                     if(element.data())
                        {
                            let tr = document.createElement('tr');
                            let td = document.createElement('td');
                            tr.appendChild(td);
                            td.textContent=element.data().created;
                            let td2 = document.createElement('td');
                  //now we start to be diffrent from stat_table
                            tr.appendChild(td2);
                            td2.textContent=element.data().quest;
                            
                            let x0,x1,x2,x3,x4;
                            let sumofanswers=0
                            if(element.data().answersstats)
                            {
                             x0=element.data().answersstats[0];
                             x1=element.data().answersstats[1];
                             x2=element.data().answersstats[2];
                             x3=element.data().answersstats[3];
                             x4=element.data().answersstats[4];
                            }
                            
                            sumofanswers=x0+x1+x2+x3+x4;

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

                                //to show precentege only with doubles
                        td3.textContent=(x0*100/sumofanswers).toFixed(2)+"%";
                        td4.textContent=(x1*100/sumofanswers).toFixed(2)+"%";
                        td5.textContent=(x2*100/sumofanswers).toFixed(2)+"%";
                        td6.textContent=(x3*100/sumofanswers).toFixed(2)+"%";
                        td7.textContent=(x4*100/sumofanswers).toFixed(2)+"%";
                            document.getElementById("second_stat_table").appendChild(tr); 
                        }
                    
                }
             });
        sortTable("second_stat_table");
            });

    //getting the questions list and quest num to our stat list

       db.collection("Forms").get().then((ans)=>{
        ans.forEach(element => {
            if(element.exists){
                 if(element.data())
                    {
                        let tr = document.createElement('tr');
                        let td = document.createElement('td');
                        tr.appendChild(td);
                         td.textContent=element.data().created;

                         let td2 = document.createElement('td');
                        tr.appendChild(td2);
                        td2.id=element.data().created;
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
                    // ///////////////////set stats button
                 
                    let setstat = document.createElement('button');
                    tr.appendChild(setstat);
                    setstat.textContent="שנה ערכים";
                   setstat.onclick=function() {


                    //decide which answerstat you want to change
                       
                       let numberchosen = document.createElement('input');
                       numberchosen.id="numberchosen"
                       numberchosen.type="number";
                       numberchosen.placeholder=0;

                       let br =document.createElement('br');
                       tr.appendChild(br)
                       tr.appendChild(numberchosen);
                       tr.append("עמודה")
                     
                   let setarray = document.createElement('input');
                   setarray.id="setarray"
                   setarray.type="number";
                   
                   setarray.placeholder=0;
                   setarray.size=4;
                   setarray.maxlength=4;
                    br =document.createElement('br');
                   tr.appendChild(br)
                   tr.appendChild(setarray);
                   tr.append("ערך")
                   br =document.createElement('br');
                   tr.appendChild(br)
                        
                   
                    let submit=document.createElement("button");
                    submit.innerHTML="בצע שינוי"
                    submit.onclick=function() {
                    let i=document.getElementById("numberchosen").value;
                    i=i-1;

                    let newvalue=document.getElementById("setarray").value;
                    newvalue=parseInt(newvalue);
                        
                   //now we set the db based on the value we got
                   var d=element.id.toString();
                        if(i===0)
                        {
                            db.collection('Forms').doc(d).update({
                            answersstats:[newvalue,element.data().answersstats[1],element.data().answersstats[2],element.data().answersstats[3],element.data().answersstats[4]]
                        } ,{ merge: true });   
                    }
                        
                        if(i===1)
                        {   db.collection('Forms').doc(d).update({
                            answersstats:[element.data().answersstats[0],newvalue,element.data().answersstats[2],element.data().answersstats[3],element.data().answersstats[4]]
                        } ,{ merge: true });    }
                        if(i===2)
                        {   db.collection('Forms').doc(d).update({
                            answersstats:[element.data().answersstats[0],element.data().answersstats[1],newvalue,element.data().answersstats[3],element.data().answersstats[4]]
                        } ,{ merge: true });    }
                        if(i===3)
                        {   db.collection('Forms').doc(d).update({
                            answersstats:[element.data().answersstats[0],element.data().answersstats[1],element.data().answersstats[2],newvalue,element.data().answersstats[4]]
                        } ,{ merge: true });    }
                        if(i===4)
                        {   db.collection('Forms').doc(d).update({
                            answersstats:[element.data().answersstats[0],element.data().answersstats[1],element.data().answersstats[2],element.data().answersstats[3],newvalue]
                        } ,{ merge: true });    }
                        



                    }
              
               tr.appendChild(submit);
                   
                
              
                
                };

                // /////////end of set stat 


                        document.getElementById("stat_table").appendChild(tr); 

                        
                    }
                
            }
       }
        );
    sortTable("stat_table");
    }
       );

       


//users and admin lists
      db.collection("users").get().then((ans)=>{
        ans.forEach(element => {
            if(element.exists){
          
            element.data().users.forEach(e=>{
                let test=e;
                let tr = document.createElement('tr')
                let td = document.createElement('td')

                td.textContent = test
                tr.appendChild(td)
                document.getElementById("list_of_current_users").appendChild(tr); 
            })
            
            element.data().admins.forEach(e=>{
                let test=e;
                let tr = document.createElement('tr')
                let td = document.createElement('td')

                td.textContent = test
                tr.appendChild(td)
                document.getElementById("list_of_current_admins").appendChild(tr); 
            })
        
          
            
        
        }
        }
            );
        

        }
            );


            
    function sortTable(which_table) {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById(which_table);
        switching = true;
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
          //start by saying: no switching is done:
          switching = false;
          rows = table.rows;
          /*Loop through all table rows (except the
          first, which contains table headers):*/
          for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            //check if the two rows should switch place:
            //if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              if (Number(x.innerHTML) > Number(y.innerHTML)){
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
        }
      }
            //end of componnenet did mount
        }
       
        
             ///buton to reset the tables and the firestore
        resetstats()
        {
           db.collection("Forms").get().then((ans) => {
            ans.forEach(element => {
                if(element.exists){
                    let d=(element.id);
                    d=d.toString();
                    
                    if(element.data().answersstats)
                    {
                     
                       db.collection("Forms").doc(d).update({
                        answersstats:[0,0,0,0,0],
                       },{ merge: true });
                   
                    }
                }
        });
    });

alert("reset done");
}
   

    
 render(){
     return(
         <div>
         
        
        <table id="stat_table" >
        <tbody> <tr><th>מספר שאלה</th><th>שאלה</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>כפתור שינוי</th></tr>
        </tbody></table>
        <br></br>
        <button id="reset_stats" className="btn btn-primary" onClick={()=>{this.resetstats()}}>אפס סטטיסטיקה</button> 
        
        <br></br><br></br><br></br>

        <table id="second_stat_table" >
        <tbody> <tr><th>מספר שאלה</th><th>שאלה</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
        </tbody></table>
        <br></br><br></br><br></br>
        <table id="users_admin_table"><th id="list_of_current_users">users</th><th id="list_of_current_admins">admin?</th></table>
        
         </div>
     );
 }   

}
 
export default Statistics