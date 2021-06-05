import {db} from '../firebase/firebase'
import React from 'react'
import {Form, Button, Card, Col} from 'react-bootstrap'
import firebase from 'firebase/app'
import "firebase/firestore";
import { Document, pdf} from '@react-pdf/renderer';


class FormHook extends React.Component{

    static numGlo = 0;
    constructor(props){
        super(props)
    }

    writeData(question,num) {
        let arrString = "";
        let megaString = "";
        for(let i = 0; i < this.numGlo-1 ; i++){
            arrString = "quest" + i
            megaString += document.getElementById(arrString).value + "$$"
        }
        arrString = "quest" + (this.numGlo-1)
        megaString += document.getElementById(arrString).value
        console.log(megaString)

        // db.collection("Forms").add(
        //     {
        //         quest: question,
        //         numQuest : Number(num),
        //         answers : megaString,
        //     }
        // )
        
        db.collection("Forms").doc(num).set(
            {
                quest: question,
                numQuest : Number(num),
                answers : megaString,
                answersstats: [0,0,0,0,0]
            }
        )
        document.getElementById("plusQ").innerHTML = "";
        document.getElementById("numQuest").value = "";
        document.getElementById("add").value = "";
        alert("התוספה שאלה !")
    }

    suppData(question,num){
        let id;
        console.log(question)
        // console.log(num)
        db.collection('Forms').get().then((ans) => {
            ans.forEach(element => {
                if(element.exists){
                    if(element.data().quest == question && element.data().numQuest == num)
                        db.collection('Forms').doc(element.id).delete();
                }
            })
        })

        document.getElementById("plusQ").innerHTML = "";
        document.getElementById("numQuest").value = "";
        document.getElementById("add").value = "";
        alert("שאלה נמחקה !")

    }

    questionNum(num){

        let formC;
        let clasString;
        document.getElementById('plusQ').innerHTML = "";
        this.numGlo = num
        for(let i = 0 ; i < num ; i++)
        {
            formC = document.createElement("input");
            clasString = "quest" + i;
            formC.setAttribute("id", clasString)
            document.getElementById("plusQ").appendChild(formC)
        }
    }
    submitformclicked(document){
        // console.log(document);
        // console.log(document.getElementById("main_form").getAttribute('action'));
        // console.log(document.getElementById("main_form"));
        let main_form=document.getElementById("main_form");
        // console.log(main_form);
        let addQuestion=document.getElementById("addQuestion");
        // console.log(addQuestion);

        db.collection('Forms').get().then((ans) => {
            ans.forEach(element => {
                if(element.exists){
                    let test = element.data()
                    //console.log(test);
                    //console.log(test.answers);
                   var answerarray=test.answers.split("$$")
                   //console.log(answerarray);
                   for(let answer in answerarray)
                   {//console.log(answerarray[answer]);
                    //console.log(document.getElementById(answerarray[answer]));
                    var kkk=document.getElementById(answerarray[answer]);
                    var x0=element.data().answersstats[0];
                    var x1=element.data().answersstats[1];
                    var x2=element.data().answersstats[2];
                    var x3=element.data().answersstats[3];
                    var x4=element.data().answersstats[4];
                    console.log(x0);
                    console.log(x1);
                    console.log(x2);
                    console.log(x3);
                    console.log(x4);
                    var d=element.data().numQuest.toString();
                    if(kkk.checked) {
                        //now we add this to the statistics page
                        console.log(true);
                        console.log(answer);
                        // console.log(element.data());
                        // console.log(parseInt(answer));
                        if(answer==0)
                        {   db.collection('Forms').doc(d).update({
                            answersstats:[x0+1,x1,x2,x3,x4]
                        } ,{ merge: true });    }
                        if(answer==1)
                        {   db.collection('Forms').doc(d).update({
                            answersstats:[x0,x1+1,x2,x3,x4]
                        } ,{ merge: true });    }
                        if(answer==2)
                        {   db.collection('Forms').doc(d).update({
                            answersstats:[x0,x1,x2+1,x3,x4]
                        } ,{ merge: true });    }
                        if(answer==3)
                        {   db.collection('Forms').doc(d).update({
                            answersstats:[x0,x1,x2,x3+1,x4]
                        } ,{ merge: true });    }
                        if(answer==4)
                        {   db.collection('Forms').doc(d).update({
                            answersstats:[x0+1,x1,x2,x3,x4+1]
                        } ,{ merge: true });    }
                      }else {
                        console.log(false);
                    }
                           console.log(element.data().answersstats)
                                        
                                         }
                   
                }
            }
        
            );
        }
        );
       


        
        // console.log(document.getElementById("main_form").getAttribute());
    }
    
    render(){
      
  
        db.collection('Forms').get().then((ans) => {
            ans.forEach(element => {
                if(element.exists){
                    let test = element.data()
                    let tr = document.createElement('tr')
                    let tdQuest = document.createElement('td')
                    tdQuest.classList.add("pQ");
                    tdQuest.textContent = test.quest
                    tr.appendChild(tdQuest)
                    let tdAns = document.createElement("td")

                    let arrAns = test.answers.split("$$");
                    
                    for(let i = 0; i<test.numQuest ; i++){

                        var x = document.createElement("INPUT");
                        x.setAttribute("type", "radio");
                        x.setAttribute("id", arrAns[i])
                        x.setAttribute("name", test.quest)
                        x.setAttribute("value",i+1)
                        
                        var y = document.createElement("LABEL");
                        var t = document.createTextNode(arrAns[i]);
                        y.setAttribute("htmlFor", arrAns[i]);
                        y.appendChild(t);
                        tdAns.appendChild(x)
                        tdAns.appendChild(y)
                    }
                    tr.appendChild(tdAns)                  
                    document.getElementById("addQuestion").appendChild(tr); 
                }
            });
          });

            db.collection('users').get().then((ans) => {
                ans.forEach(element => {
                    if(element){
                        let subjectslist="mailto:";
                        
                        if(element.data())
                        {element.data().admins.forEach(e=>{
                            console.log(e);
                            subjectslist+=e;
                            subjectslist+=";"
                        })
                        
                        subjectslist+="?subject=תשובות לשאלון משה";
                        console.log(subjectslist);
                        
                        console.log( document.getElementById("main_form").getAttribute("action"));
                        document.getElementById("main_form").action=subjectslist;
                       console.log( document.getElementById("main_form").getAttribute("action"));
                    
                    
                        }
                    }
                });
            }
            );

            
    return (
        
        
        <div id="F1" dir="rtl">
        <Card style={{"padding": "1.5%", "borderColor":"#66CDAA"}}>
        <h1 style={{"textAlign":"center"}}>שאלון מש"ה</h1>

            <form id="main_form" encType="text/plain" action="mailto:" method="post"> 

            <h4 style={{"textaAlign":"center"}}>במקרים בהם יש סקאלה: 1-5, כאשר 1 מייצג מצב טוב ו-5 מייצג מצב גרוע</h4>
            <h2 className="pre_titles">שייכות:</h2>
            
            <table id="addQuestion"></table>
            {/* <hr width="300%"/> */}
            {/* <br/> */}


            {/* <br/> */}
            <button className="btn btn-primary"  onClick={()=>{this.submitformclicked(document)}} style = {{"marginRight": "45%","backgroundcolor" : "#66CDAA", "borderColor":"#66CDAA"}}>שלח</button>
            </form>
            </Card>


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
                    <Card style = {{"marginRight":"10%","display": "inline-block","width": "60%", "borderColor":"#66CDAA"}}>
                        <Card.Body>
                            <Form id ="plusQ">
                            <Form.Label className = "pQ" >תשובות :</Form.Label>

                            </Form>
                        </Card.Body>
                    </Card>

                    <Button className = "w-15" style= {{"display" : "inline-block","marginRight" : "40%", "marginTop" : "10px", "backgroundColor" : "#66CDAA", "borderColor":"#66CDAA"}} type = "submit" 
                         onClick={()=>{this.writeData(document.getElementById("add").value,document.getElementById("numQuest").value)}}>הוספה</Button>
                    <Button className = "w-15" style= {{"display" : "inline-block","marginRight" : "7%", "marginTop" : "10px", "backgroundColor" : "red", "borderColor":"red"}} type = "submit" 
                         onClick={()=>{this.suppData(document.getElementById("add").value,document.getElementById("numQuest").value)}}>מחיקה</Button>

                </Card.Body> 
            </Card>  
            
    </div>
    
    )
    }
}

export default FormHook