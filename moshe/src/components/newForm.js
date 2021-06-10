import React ,{Component} from 'react'
import {db} from '../firebase/firebase'
import {Card} from 'react-bootstrap'
import Quest from "./createQuest";
import apiKey from "./emailkey";
import emailjs from "emailjs-com"
import ContactUs from './contactForm'



// let textarray=Array(100);
var emailTxt=[]
var body=""
class newForm extends Component {
    static numGlo = 0;

    constructor(props) {
        emailTxt = []
        body=""
        super(props);
        this.state = {
            addQuest: false,
            forms: [],
            body:"",

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
            this.setState({forms: newForm})
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
                    this.handlerCheck(test.created, test.quest, e.target.value, e.target.id)
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
        // textarray[parseInt(tdQuest.id)]=tr;
        return tr
    }


    handlerCheck(num, q, a, txt) {
        emailTxt[num] = q + " : " + txt + " (" + num
        body="";
        emailTxt.forEach(line=>{
            body+=line+'\r\n\r\n';
        })
        this.setState({body:body})
    }

    // sendEmail(e) {
    //     // e.preventDefault(); // Prevents default refresh by the browser
    //     var body = ""
    //     emailTxt.forEach(line => {
    //         body += line + "\n"
    //     })
    //     console.log(body)
    //     console.log(e.target)
    //     emailjs.sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
    //         .then((result) => {
    //                 alert("Message Sent, We will get back to you shortly", result.text);
    //             },
    //             (error) => {
    //                 alert("An error occurred, Please try again", error.text);
    //             });
    // }

    sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_msxx82d', 'template_p7wsh3q', e.target, 'user_zNfO8cPQT80umB3KCdmPj')
            .then((result) => {
                console.log(result.text);
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

                    {/* <form method="method" action="mailto:a@b.c" encType="text/plain">
<input type="text" name="subject" value="d e"/>
<input type="text" name="body" value="אהבסבהבה"/>
        <button type="submit">k</button>
        </form> */}
                    <form id="main_form" encType="text/plain" onSubmit={this.sendEmail}>


                        {/* <form id="main_form" method="method" action="mailto:avni@gmail.com" encType="text/plain">  */}
                        {/* <input type="text" name="subject" defaultValue="תשובות לשאלון משה"/>
            <input id="form_body" type="text" name="body" defaultValue="אהבסבהבה"/> */}



                        <h4 style={{"textAlign":"center"}}>במקרים בהם יש סקאלה: 1-5, כאשר 1 מייצג מצב טוב ו-5 מייצג מצב גרוע</h4>



                        <table id="addQuestion">
                            <tbody id="שייכות" className="pre_titles"><tr><td>שייכות:</td></tr></tbody>
                            <tbody id="יאוש"className="pre_titles"><tr><td>יאוש/תקווה:</td></tr></tbody>
                            <tbody id="בדידות"className="pre_titles"><tr><td>בדידות/ניכור:</td></tr></tbody>
                        </table>
                        {/* <hr width="300%"/> */}
                        {/* <br/> */}


                        {/* <br/> */}
                        <button className="btn btn-primary" onClick={()=>{this.sendEmail()}}
                                style = {{"marginRight": "45%"}}>שלח</button>


                        <textarea id="from" hidden={true} value="avni971@gmail.com" name="from_name"></textarea>
                        <textarea id="to" hidden={true} value="roipk123@gmail.com" name="to_name"></textarea>
                        <textarea id="massage" hidden={true} value={this.state.body} name="message"></textarea>
                        <input type="submit" className="btn btn-info" value="send massage"></input>
                    </form>
                </Card>



                {/*<div>*/}
                {/*    <div className="container" >*/}
                {/*        <form onSubmit={this.sendEmail}>*/}
                {/*            <div className="row pt-5 mx-auto">*/}
                {/*                <div className="col-8 form-group mx-auto">*/}
                {/*                    <input type="text" className="form-control" placeholder="Name" name="name"/>*/}
                {/*                </div>*/}
                {/*                <div className="col-8 form-group pt-2 mx-auto">*/}
                {/*                    <input type="email" className="form-control" placeholder="Email Address" name="email"/>*/}
                {/*                </div>*/}
                {/*                <div className="col-8 form-group pt-2 mx-auto">*/}
                {/*                    <input type="text" className="form-control" placeholder="Subject" name="subject"/>*/}
                {/*                </div>*/}
                {/*                <div className="col-8 form-group pt-2 mx-auto">*/}
                {/*                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" value={this.state.body} name="message"></textarea>*/}
                {/*                </div>*/}
                {/*                <div className="col-8 pt-3 mx-auto">*/}
                {/*                    <input type="submit" className="btn btn-info" value="send massage"></input>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </form>*/}
                {/*    </div>*/}
                {/*</div>*/}



                {
                    this.state.forms.length>0?
                    <Quest forms={this.state.forms}/>:
                        <Quest/>
                }
            </div>
        );
    }

}




export default newForm;
