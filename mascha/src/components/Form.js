import {db} from '../firebase/firebase'
import React from 'react'
import {Card} from 'react-bootstrap'
import "firebase/firestore";
// import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';


class FormHook extends React.Component{

    static numGlo = 0;
    
    constructor(props){
        super(props)
        this.state={
                           
        }
       
    }

    async componentDidMount(){
        let secs1=Array()
        let secs2=Array()
        let secs3=Array()
  
       
try{
        let forms = await db.collection("Forms").get()
        let i;
        let indexarray=[];
        forms.docs.forEach((form,index) =>{
            i=parseInt(form.id);
            indexarray.push(i);
        //     if(form.data().zone===1)
        //     {
        //      secs1.push(form.data())
        //     }
        
        //    if(form.data().zone===2)
        //    {
        //     secs2.push(form.data())
        //    }
        //    if(form.data().zone===3)
        //    {
        //     secs3.push(form.data())
        //    }
        })
        // console.log(indexarray);
        indexarray.sort((a,b)=>a-b);
        // console.log(indexarray);


// console.log(secs1);
for(let j=0;j<indexarray.length;j++)
{   let k=j.toString()
 
    var docRef = db.collection("Forms").doc(k);

docRef.get().then((doc) => {
    if (doc.exists) {
        switch(doc.data().zone){
            case 1:
             secs1.push(doc.data()); break;
             case 2:
                 secs2.push(doc.data()); break;
                 case 3:
                     secs3.push(doc.data()); break;
                     default:break;
         }
}
});
    
   
}

this.setState({secs1:secs1,secs2:secs2,secs3:secs3})
console.log(this.state) 
// this.updatepage();
        //everysinge secs has his own array filled with the right questions
}
catch(error){
    alert(error);
}
    }



    
//    async updatepage()
//             {
//                 console.log(typeof(this.state));
//             if(this.state)
//             {
//                 let secs_array =this.state;
//                  for(let element in secs_array)
//                 //   for(let index=0;index<this.state.secs1.length;index++)
//                 {
//                 console.log("in");
                
//                 // let test = secs_array.secs1;
//                 let test=element;
//                 console.log(test);
               
//                 let tr = document.createElement('tr')
//                     let tdQuest = document.createElement('td')
//                     tdQuest.classList.add("pQ");
//                     tdQuest.id=parseInt(test.questionNumber);
//                     tdQuest.textContent = test.quest
//                     tr.appendChild(tdQuest)
//                     console.log(tdQuest);
//                     let tdAns = document.createElement("td")
//                     let arrAns
//                     if(test.answers){
//                     arrAns = test.answers.split("$$");
//                     }
//                     for(let i = 0; i<test.numQuest ; i++){

//                         var x = document.createElement("INPUT");
//                         x.setAttribute("type", "radio");
//                         x.setAttribute('onChange',this.test1());
//                         x.setAttribute("id", arrAns[i])
//                         x.setAttribute("name",test.quest)
//                         //x.setAttribute("name","question number:"+test.numQuest)
//                         x.setAttribute("value",i+1)
                        
//                         var y = document.createElement("LABEL");
//                         var t = document.createTextNode(arrAns[i]);
//                         y.setAttribute("htmlFor", arrAns[i]);
//                         y.appendChild(t);
//                         tdAns.appendChild(x)
//                         tdAns.appendChild(y)
                        
//                     }
//                     ///stuck here we have zone 1 but it won't go in order
//                     tr.appendChild(tdAns)
//                     console.log(tr);
//                 //     textarray.push(tr);
//                 // //    console.log(textarray);
                   
//                 document.getElementById("שייכות").after(tr);
//                 }
                    
//                 // document.getElementById("שייכות").after(textarray);
//             }

//         }

    writeData(question,num,zone) {
        let arrString = "";
        let megaString = "";
        for(let i = 0; i < this.numGlo-1 ; i++){
            arrString = "quest" + i
            megaString += document.getElementById(arrString).value + "$$"
        }
        arrString = "quest" + (this.numGlo-1)
        megaString += document.getElementById(arrString).value
     
        let yuvalquestionnum;
        db.collection('questionsnum').get().then((ans) => {
            ans.forEach(element => {
                if(element.exists){
                    yuvalquestionnum=element.data().yuvalquestionnum;
                    //console.log(yuvalquestionnum);
                    let d=yuvalquestionnum.toString();
                    //update the forms
                    let docnum=parseInt(d);
                    db.collection("Forms").doc(d).update(
                        {
                            quest: question,
                            numQuest : Number(num),
                            answers : megaString,
                            answersstats: [0,0,0,0,0],
                            questionNumber:Number(docnum),
                        }
                    )
                    //add +1 to question num
                    db.collection("questionsnum").doc("questionsnum").update(
                        {
                          yuvalquestionnum: yuvalquestionnum+1,
                        }
                    )
            
                }
            });
            });

        document.getElementById("plusQ").innerHTML = "";
        document.getElementById("numQuest").value = "";
        document.getElementById("add").value = "";
        alert("נוספה שאלה !")
    }

    suppData(question,num){
        
        //console.log(question)
        // //console.log(num)
        db.collection('Forms').get().then((ans) => {
            ans.forEach(element => {
                if(element.exists){
                    if(element.data().quest === question && element.data().numQuest === num)
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
        this.yuvalquestionnum++;
        for(let i = 0 ; i < num ; i++)
        {
            formC = document.createElement("input");
            clasString = "quest" + i;
            formC.setAttribute("id", clasString)
            document.getElementById("plusQ").appendChild(formC)
        }
    }

    test1()
    {
      //  console.log('in')
    }
    submitformclicked(){
        


        // // adding +1 to the answer given by the form
        // db.collection('Forms').get().then((ans)=>{
        //     ans.forEach(element=>{
        //         if(element.exists)
        //         {
        //             //put in number the current question
                    
        //             let currentquestion=element.id.toString();
        //             // console.log(currentquestion);
        //             // console.log(element.data().quest);
        //             //split the answers
        //             let answeroptions
        //             if(element.data().answers)
        //             {
        //                  answeroptions=element.data().answers.split("$$");
        //                 // console.log(answeroptions);                
        //             }
        //             //get the stats already in firestore
        //             let x0,x1,x2,x3,x4;
        //             // console.log(element.data().answersstats);
        //             if(element.data().answersstats)
        //             {
        //                 x0=parseInt(element.data().answersstats[0]);
                        
        //                 x1=parseInt(element.data().answersstats[1]);
                        
        //                 x2=parseInt(element.data().answersstats[2]);
                        
        //                 x3=parseInt(element.data().answersstats[3]);
                        
        //                 x4=parseInt(element.data().answersstats[4]);
        //             }
        //             // console.log(x0,x1,x2,x3,x4);
                    
        //             //find the picked answer from the form
        //            for(let answer in answeroptions)
        //            {
        //             // console.log(answer);   
        //             // console.log(answeroptions[answer]);
        //             var k=document.getElementById(answeroptions[answer]);
        //             if(k.checked)
        //             {
        //                 //  console.log(k);
        //                 let place=parseInt(k.value)-1;
        //                 // console.log(place);
        //             //change the correct stat
        //             if(place===0)
        //             db.collection("Forms").doc(currentquestion).update({
        //                 answersstats:[Number(x0+1),Number(x1),Number(x2),Number(x3),Number(x4)],
        //             },{ merge: true });
        //             if(place===1)
        //             db.collection("Forms").doc(currentquestion).update({
        //                 answersstats:[Number(x0),Number(x1+1),Number(x2),Number(x3),Number(x4)],
        //             },{ merge: true });
        //             if(place===2)
        //             db.collection("Forms").doc(currentquestion).update({
        //                 answersstats:[Number(x0),Number(x1),Number(x2+1),Number(x3),Number(x4)],
        //             },{ merge: true });
        //             if(place===3)
        //             db.collection("Forms").doc(currentquestion).update({
        //                 answersstats:[Number(x0),Number(x1),Number(x2),Number(x3+1),Number(x4)],
        //             },{ merge: true });
        //             if(place===4)
        //             db.collection("Forms").doc(currentquestion).update({
        //                 answersstats:[Number(x0),Number(x1),Number(x2),Number(x3),Number(x4+1)],
        //             },{ merge: true });
                        
        //             // //to make sure we dont go over same answer twcie
        //             // k.checked=false;
        //             // console.log(element.data());
        //             }


        //            }
                

                    
                    

        //             //put it back in firestore
        //         }

        //     });
        
        // });


        // console.log(document.getElementById("main_form").getAttribute("action"));
        // let x=document.getElementById("main_form").getAttribute("action");
        // x+=`?body='meow'`;
        // console.log(x);
        // document.getElementById("main_form").action=x;
        // console.log(document.getElementById("main_form").getAttribute("action"));

        

    }
    
    render(){
      
//adding questions to forms  
        let textarray=Array(100);
            db.collection('Forms').get().then((ans) => {
            ans.forEach(element => {
                if(element.exists){
                    // console.log("in add element : "+element.id);
                    let test = element.data()
                    let tr = document.createElement('tr')
                    let tdQuest = document.createElement('td')
                    tdQuest.classList.add("pQ");
                    tdQuest.id=parseInt(element.id);

                  

                    tdQuest.textContent = test.quest
                    tr.appendChild(tdQuest)
                    // console.log(tdQuest);
                    let tdAns = document.createElement("td")
                    let arrAns
                    if(test.answers){
                    arrAns = test.answers.split("$$");
                    }
                    for(let i = 0; i<test.numQuest ; i++){

                        var x = document.createElement("INPUT");
                        x.setAttribute("type", "radio");
                        x.setAttribute('onChange',this.test1());
                        x.setAttribute("id", arrAns[i])
                        x.setAttribute("name",test.quest)
                        //x.setAttribute("name","question number:"+test.numQuest)
                        x.setAttribute("value",i+1)
                        
                        var y = document.createElement("LABEL");
                        var t = document.createTextNode(arrAns[i]);
                        y.setAttribute("htmlFor", arrAns[i]);
                        y.appendChild(t);
                        tdAns.appendChild(x)
                        tdAns.appendChild(y)
                        
                    }
                    tr.appendChild(tdAns) 
                    
                    // console.log(tdQuest.id);
                    textarray[parseInt(tdQuest.id)]=tr;
                //   console.log(textarray);
                    }
                    
                    // if(this.state.secs1)
                    // {
                        // for(let i=0;i<this.state.secs1.length;i++)
                        // {
                            // for(let j=0;j<textarray.length;j++)
                            // {
                            //     console.log(textarray[j]);
                            // }
                        // }
                        // console.log(parseInt(tdQuest.id));
                        // // console.log(this.state.secs1.length);
                        // if(parseInt(tdQuest.id)<this.state.secs1.length)
                        // {
                        //     console.log(true);
                        //     document.getElementById("שייכות").after(tr);
                        // }
                    // console.log(this.state.secs1.length)
                    // console.log(this.state.secs1[0])


                    // // let j;     
                    // for(j=1;j<12;j++)           
                    // {if(parseInt(element.id)===j)
                    // {document.getElementById("שייכות").after(tr);} }
                    // for(j=12;j<21;j++)           
                    // {if(parseInt(element.id)===j)
                    // {document.getElementById("יאוש").after(tr);} }
                    // for(j=21;j<40;j++)           
                    // {if(parseInt(element.id)===j)
                    // {document.getElementById("בדידות").after(tr);} }
                    
                    

                    
                }
            

            );
            // console.log(textarray);
            // console.log(textarray.length);
            if(this.state.secs1 && this.state.secs2 && this.state.secs3)
                    {
                        for(let i=this.state.secs1.length;i>1;i--)
                        {
                            document.getElementById("שייכות").after(textarray[i]);       
                        }
                        for(let i=this.state.secs2.length;i>this.state.secs1.length;i--)
                        {
                            document.getElementById("יאוש").after(textarray[i]);       
                        }
                        for(let i=this.state.secs3.length;i>this.state.secs2;i--)
                        {
                            document.getElementById("בדידות").after(textarray[i]);       
                        }
                       
                    }
          });
        








            //   {
        //             //console.log(tdQuest.id);
        //             if(element.data().questionNumber)
        //             { //{console.log(element.data().questionNumber);}
        //              // console.log(this.state.secs1);
        //              for(let index in this.state.secs1)
        //              {
        //                  //console.log(this.state.secs1[index]);
        //                  if(element.data().questionNumber === this.state.secs1[index].questionNumber)
        //              {
        //                  console.log(element.data().questionNumber);
        //                  document.getElementById("שייכות").after(tr);
        //              }
        //          }
        //      }
        //     }
            db.collection('users').get().then((ans) => {
                ans.forEach(element => {
                    if(element){
                        let subjectslist="mailto:";
                        
                        if(element.data())
                        {
                            // console.log(element.data());
                            // console.log(element.data().admins);
                            element.data().admins.forEach(e=>{
                            subjectslist+=e;
                            subjectslist+=";"
                            })
                           
                            // console.log(subjectslist);
                        subjectslist+="?subject=תשובות לשאלון משה";
                        // console.log(subjectslist);
                        
                        //console.log( document.getElementById("main_form").getAttribute("action"));
                        document.getElementById("main_form").action=subjectslist;
                       //console.log( document.getElementById("main_form").getAttribute("action"));
                    
                    
                        }
                    }
                });
            }
            );
   
   
   
   
            return (
        
        
        <div id="F1" dir="rtl">
        <Card style={{"padding": "1.5%", "borderColor":"#66CDAA"}}>
        <h1 style={{"textAlign":"center"}}>שאלון מש"ה</h1>

        {/* <form method="method" action="mailto:a@b.c" encType="text/plain">
<input type="text" name="subject" value="d e"/>
<input type="text" name="body" value="אהבסבהבה"/>
        <button type="submit">k</button>
        </form> */}
            {/* <form id="main_form" encType="text/plain" action="mailto:" method="post" accept-charset="UTF-8">  */}
            
            
            <form id="main_form" method="method" action="mailto:avni@gmail.com" encType="text/plain"> 
            <input type="text" name="subject" defaultValue="d e"/>
            <input type="text" name="body" defaultValue="אהבסבהבה"/>



            <h4 style={{"textAlign":"center"}}>במקרים בהם יש סקאלה: 1-5, כאשר 1 מייצג מצב טוב ו-5 מייצג מצב גרוע</h4>
            
            
            
            <table id="addQuestion">
            <tbody id="שייכות" className="pre_titles"><tr><td>שייכות:</td></tr></tbody>
            <tbody id="יאוש"className="pre_titles"><tr><td>יאוש/תקווה:</td></tr></tbody>
            <tbody id="בדידות"className="pre_titles"><tr><td>בדידות/ניכור:</td></tr></tbody>
            </table>
            {/* <hr width="300%"/> */}
            {/* <br/> */}


            {/* <br/> */}
            <button className="btn btn-primary"  onClick={()=>{this.submitformclicked()}} style = {{"marginRight": "45%"}}>שלח</button>
            </form>
            </Card>

            {/* <Card style= {{"marginTop" : "55px","borderColor":"#66CDAA" }}>
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
            </Card>   */}
            
    </div>
    
    )
    }
}

export default FormHook