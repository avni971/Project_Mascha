import React ,{Component} from 'react'
import {db} from '../firebase/firebase'
import {Card} from 'react-bootstrap'
import Quest from "./createQuest";
import apiKey from "./emailkey";
import emailjs from "emailjs-com"
import ContactUs from './contactForm'
import Footer from './Footer'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';


// let textarray=Array(100);
var emailTxt=[]
var body=""
var useremail=""
var admins=""
var checksum=[]
var update=[];
class newForm extends Component {
    static numGlo = 0;
    
    constructor(props) {
        emailTxt = []
        body=""
        useremail="";
        admins=""
        super(props);
        this.state = {
            addQuest: false,
            forms: [],
            body:"",
            useremail:"",
            admins:"",
            checksum:[],
            update:[],
           
        }

    }


    async componentDidMount() {
        let secs1 = []
        let secs2 = []
        let secs3 = []
        var forms = await db.collection("Forms").orderBy("created", "desc").get()
        if (forms) {

            forms.forEach(form => {
                var tr = this.createTag(form)
                switch (form.data().zone) {
                    case 1:
                        secs1.push(form.data())
                        document.getElementById("שייכות").after(tr);
                        break;
                    case 2:
                        secs2.push(form.data())
                        document.getElementById("יאוש").after(tr);
                        break;
                    case 3:
                        secs3.push(form.data())
                        document.getElementById("בדידות").after(tr);
                        break;
                    default:
                        break;
                }
            })

            var newForm = []
            newForm.push(secs1)
            newForm.push(secs2)
            newForm.push(secs3)
            if(this.props.data)
            {this.setState({forms: newForm,useremail:this.props.location.data.user.email})}
            else{this.setState({forms: newForm})}
        }

        //getting user email
       
               if(this.props.history)
              {
                  if(this.props.history.location)
                  {
                     if(this.props.history.location.data)
                    {
                        // console.log(this.props.history.location.data.user.email);
                        this.setState({useremail:this.props.history.location.data.user.email})
                        console.log(this.state.useremail);
                   }
                }
              }
              


              
              //gettin admins email
             var  Users= await db.collection("users").get()
              if(Users)
              {
                  Users.forEach(users=>{
                    //   console.log(users.data().admins);
                    var newadmins="";
                    users.data().admins.forEach(admin=>{
                        newadmins+=admin+";"
                    })
                    
                      this.setState({admins:newadmins})
                      console.log(this.state.admins);
                  })
                
              }



        // try{
        //     let forms = await db.collection("Forms").get()
        //     let i;
        //     let indexarray=[];
        //     forms.docs.forEach((form,index) =>{
        //         i=parseInt(form.id);
        //         indexarray.push(i);
        //         //     if(form.data().zone===1)
        //         //     {
        //         //      secs1.push(form.data())
        //         //     }
        //
        //         //    if(form.data().zone===2)
        //         //    {
        //         //     secs2.push(form.data())
        //         //    }
        //         //    if(form.data().zone===3)
        //         //    {
        //         //     secs3.push(form.data())
        //         //    }
        //     })
        //     indexarray.sort((a,b)=>a-b);
        //     for(let j=0;j<indexarray.length;j++)
        //     {   let k=j.toString()
        //
        //         var docRef = db.collection("Forms").doc(k);
        //
        //         docRef.get().then((doc) => {
        //             if (doc.exists) {
        //                 switch(doc.data().zone){
        //                     case 1:
        //                         secs1.push(doc.data()); break;
        //                     case 2:
        //                         secs2.push(doc.data()); break;
        //                     case 3:
        //                         secs3.push(doc.data()); break;
        //                     default:break;
        //                 }
        //             }
        //         });
        //
        //
        //     }
        //
        //     this.setState({secs1:secs1,secs2:secs2,secs3:secs3})
        //     console.log(this.state)
        // }
        // catch(error){
        //     alert(error);
        // }
    }


    createTag(element) {
        let test = element.data()
        let tr = document.createElement('tr')
        let tdQuest = document.createElement('td')
        tdQuest.classList.add("pQ");
        tdQuest.id = parseInt(element.data().created);


        tdQuest.textContent = test.quest
        tr.appendChild(tdQuest)
        // console.log(tdQuest);
        let tdAns = document.createElement("td")
        let arrAns
        if (test.answers) {
            arrAns = test.answers
        }
        for (let i = 0; i < arrAns.length; i++) {

            var x = document.createElement("INPUT");
            x.setAttribute("type", "radio");
            x.addEventListener(
                'change',
                (e) => {
                    this.handlerCheck(test.created, test.quest, e.target.value, e.target.id,test.zone,e)
                },
                false
            )

            x.setAttribute("id", arrAns[i])
            x.setAttribute("name", test.quest)
            //x.setAttribute("name","question number:"+test.numQuest)
            x.setAttribute("value", i + 1)

            var y = document.createElement("LABEL");
            var t = document.createTextNode(arrAns[i]);
            y.setAttribute("htmlFor", arrAns[i]);
            y.appendChild(t);
            tdAns.appendChild(x)
            tdAns.appendChild(y)

        }
        tr.appendChild(tdAns)
        
        return tr
    }


    handlerCheck(num, q, a, txt,z,e) {
      
        console.log(e);
        //handling the email body output
        var zzz=this.state.forms[z-1];
        var zz;
        var sum=0;
       
        zzz.forEach(element=>{
            if(element.quest===q)
            {zz=element}
        })
        emailTxt[num] = q + " : " + txt+"-"+"ערך תשובה"+":"+zz.answersv[parseInt(a)-1];
        body="";
       var currentchecksum=this.state.checksum;
         currentchecksum[num]=parseInt(zz.answersv[parseInt(a)-1]);
         this.setState({checksum:currentchecksum});
         currentchecksum.forEach(value=>{sum+=value});
        emailTxt.forEach(line=>{
            body+=line+"<br></br>";
        })
        body+="ערך תוצאות השאלון:"+"<br></br>"+sum;
       
        this.setState({body:body})
        //handling the statistic page output
    //     console.log(zz.answersstats);
this.radiochecked()  
// console.log(this.state.update);


    }


    //SUBMIT FORM CLICKED is called when the submit button was clicked.
//it updates the firestore so the stat page will be ready for next read
radiochecked(){

console.log("in")
   
    // adding +1 to the answer given by the form
  
let form=document.getElementById("addQuestion");
// console.log(form);
let inputs=document.getElementsByTagName("input");
// console.log(inputs);
var checkedarray=[];

for(let i=0;i<inputs.length;i++)
{
    if(inputs[i].checked)
   {
    //    console.log(inputs[i]);
    checkedarray.push(parseInt(inputs[i].value));    
}
}
// console.log(checkedarray);
this.setState({update:checkedarray});
// console.log(this.state.update);
// this.updatefirebase()
}  

updatefirebase(){
   var forms= db.collection('Forms').orderBy("created","asc").get().then((ans)=>{
            ans.forEach(element=>{
                if(element.exists)
                {
                    let currentquestion=element.id.toString();
                    let created=element.data().created;
                    // console.log(currentquestion);
                    // console.log(created);
                    var answeroptions=element.data().answers;
                    var x0,x1,x2,x3,x4;
                    if(element.data().answersstats)
                        {
                            x0=parseInt(element.data().answersstats[0]);
                            
                            x1=parseInt(element.data().answersstats[1]);
                            
                            x2=parseInt(element.data().answersstats[2]);
                            
                            x3=parseInt(element.data().answersstats[3]);
                            
                            x4=parseInt(element.data().answersstats[4]);
                        }
                        console.log(x0,x1,x2,x3,x4);
                        // console.log(this.state.update);
                        // console.log(this.state.update.length);
                        answeroptions.forEach(answer=>{
                            var k=document.getElementById(answer);
                           
                            if(k && k.checked && k.name==element.data().quest)
                            {
                                console.log(k);
                                console.log(k.name);
                                console.log(element.data().quest)
                                console.log(x0,x1,x2,x3,x4);
                                
                              let place=parseInt(k.value)-1;

                                switch (place){
                                    case 0: x0+=1; break;
                                    case 1: x1+=1; break;
                                    case 2: x2+=1; break;
                                    case 3: x3+=1; break;
                                    case 4: x4+=1; break;
                                    default:break;
                                }
                            
                              db.collection("Forms").doc(currentquestion).update({
                                  answersstats:[x0,x1,x2,x3,x4],
                                },{ merge: true });
                                    

                            }
                        })

                }
            })
           
        })
       var submitbtn= document.getElementById("submit");
       submitbtn.removeAttribute("hidden");
       
       var addquestiontable= document.getElementById("addQuestion");
       addquestiontable.setAttribute("hidden","true");

       var updatetbtn= document.getElementById("update");
       updatetbtn.setAttribute("hidden","true");
    }




   
  

    sendEmail(e) {
     
     //update db first
        console.log("iiiin")
       
        console.log(e);
        e.preventDefault();   
        emailjs.sendForm('service_msxx82d', 'template_p7wsh3q', e.target, 'user_zNfO8cPQT80umB3KCdmPj')
            .then((result) => {
                console.log(result.text);
                alert("email sent");
            }, (error) => {
                console.log(error.text);
            });
            
        e.target.reset()
    }




    handleSubmit(e)
    {
        e.preventDefault();
        console.log(e.target)
        
    }

    
   




    render() {
        return (
            <div dir="rtl">
                <Card style={{"padding": "1.5%", "borderColor":"#66CDAA"}}>
                    <h1 style={{"textAlign":"center"}}>שאלון מש"ה</h1>

                    <form id="main_form" encType="text/plain" onSubmit={this.sendEmail}>



                        <h4 style={{"textAlign":"center"}}>במקרים בהם יש סקאלה: 1-5, כאשר 1 מייצג מצב טוב ו-5 מייצג מצב גרוע</h4>



                        <table id="addQuestion">
                            <tbody id="שייכות" className="pre_titles"><tr><td>שייכות:</td></tr></tbody>
                            <tbody id="יאוש"className="pre_titles"><tr><td>יאוש/תקווה:</td></tr></tbody>
                            <tbody id="בדידות"className="pre_titles"><tr><td>בדידות/ניכור:</td></tr></tbody>
                        </table>
                       
                        
                        <textarea id="from" hidden={false} defaultValue={this.state.useremail} name="from_name"></textarea>
                        <textarea id="to" hidden={true} defaultValue={this.state.admins} name="to_name"></textarea>
                        <textarea id="massage" hidden={true} defaultValue={this.state.body} name="message"></textarea>
                      <input id="update" type="button" className="w-100 btn btn-primary" defaultValue="סיים שאלון" onClick={this.updatefirebase}></input>
                       <br></br>
                        <input id="submit" hidden={true} type="submit" className="w-100 btn btn-primary" value="שלח מייל"></input>
                    </form>
                </Card>






                {
                    this.state.forms.length>0?
                    <Quest forms={this.state.forms}/>:
                        <Quest/>
                      
                }
                {
                     this.state.forms.length>0? <Footer forms={this.state.forms}/>:<Footer/>
                }
            </div>
        );
    }

}




export default newForm;
