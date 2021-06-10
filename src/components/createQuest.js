import React ,{Component} from 'react'
import {Card,Form,Button} from 'react-bootstrap'
import {db} from "../firebase/firebase";


// (e)=>{
//     console.log(e)
//     ans[i]=e
//     this.setState({answers:ans})
// }


class Quest extends Component {


    constructor(props) {
        super(props);
        var forms=props.forms


        this.state = {
            addQuest: true,
            answers:"",
            quest:"",
            questionNumber:"",
            zone:"",
            created:""

        }
    }



    uploadtoFirebase() {
        var created = 0;
        if (this.props.forms)
        {
            created = this.props.forms[this.state.zone-1].length
        }


        var form={
            answers:this.state.answers,
            answersstats:[0,0,0,0,0],
            quest:this.state.quest,
            questionNumber:this.state.questionNumber,
            zone:Number(this.state.zone),
            created:created,
        }

       db.collection("Forms").doc().set(form).then((res)=>{
           alert("done")
           this.setState({
               addQuest: true,
               answers:"",
               quest:"",
               questionNumber:"",
               zone:"",
               created:""})
       })


    }
    questionNum(num){

        let formC;
        let clasString;
        document.getElementById('plusQ').innerHTML = "";
        // this.numGlo = num
        // this.yuvalquestionnum++;
        var ans=[]
        for(let i = 0 ; i < num ; i++)
        {
            formC = document.createElement("input");
            clasString = "quest" + i;
            formC.setAttribute("id", clasString+i)
            formC.addEventListener(
                'change',
                (e)=> {
                        ans[i]=e.target.value
                            this.setState({answers:ans})
                },
                false
            );
            document.getElementById("plusQ").appendChild(formC)
        }
    }




    render() {
        return (
            <div>
                {this.state.addQuest ?
                    (<Button onClick={() => {
                        this.setState({addQuest: false})
                    }}>הוסף שאלה</Button>) :
                    (
                        <div>
                            <div>
                                <Card style={{"marginTop": "55px", "borderColor": "#66CDAA"}}>
                                    <Card.Body>

                                        <Form>
                                            <Form.Label className="pQ">הוספת/מחיקה שאלה :</Form.Label>
                                            <Form.Control onChange={(e)=>{

                                                this.setState({quest:e.target.value})}}   id="add" style={{"borderColor": "#66CDAA"}}/>
                                        </Form>

                                        <Card style={{
                                            "width": "20%",
                                            "display": "inline-block",
                                            "borderColor": "#66CDAA"
                                        }}>
                                            <Card.Body>
                                                <Form>
                                                    <Form.Label className="pQ">כמה בחירות לשאלה ?</Form.Label>
                                                    <Form.Control min="0" max="5" placeholder="0" type="number" onChange={(e) => {
                                                       this.setState({numQuest:e.target.value,answers:[]})

                                                        this.questionNum(e.target.value)
                                                    }} id="numQuest" style={{"borderColor": "#66CDAA"}}/>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                        <Card style={{
                                            "width": "20%",
                                            "display": "inline-block",
                                            "borderColor": "#66CDAA"
                                        }}>

                                            <Card.Body>
                                                <Form>
                                                    <Form.Label  className="pQ">איזה אזור לשאלה ?</Form.Label>
                                                    <Form.Control  placeholder="1" min="1" max="3" type="number" onChange={(e) => {
                                                        this.setState({zone:e.target.value})
                                                        // this.zone(document.getElementById("zone").value)
                                                    }} id="zone" style={{"borderColor": "#66CDAA"}}/>
                                                </Form>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{
                                            "marginRight": "10%",
                                            "display": "inline-block",
                                            "width": "60%",
                                            "borderColor": "#66CDAA"
                                        }}>
                                            <Card.Body>
                                                <Form id="plusQ">
                                                    <Form.Label className="pQ">תשובות :</Form.Label>

                                                </Form>
                                            </Card.Body>
                                        </Card>

                                        <Button className="w-15" style={{
                                            "display": "inline-block",
                                            "marginRight": "40%",
                                            "marginTop": "10px",
                                            "backgroundColor": "#66CDAA",
                                            "borderColor": "#66CDAA"
                                        }} type="submit"
                                                onClick={() => {
                                                    this.uploadtoFirebase()
                                                    // this.writeData(document.getElementById("add").value, document.getElementById("numQuest").value, document.getElementById("zone").value)
                                                }}>הוספה</Button>
                                        <Button className="w-15" style={{
                                            "display": "inline-block",
                                            "marginRight": "7%",
                                            "marginTop": "10px",
                                            "backgroundColor": "red",
                                            "borderColor": "red"
                                        }} type="submit"
                                                onClick={() => {
                                                    this.suppData(document.getElementById("add").value, document.getElementById("numQuest").value)
                                                }}>מחיקה</Button>

                                    </Card.Body>
                                </Card>
                            </div>
                            <Button onClick={() => {
                                this.setState({addQuest: true})
                                this.uploadtoFirebase()
                            }}>שמירת שינויים
                            </Button>
                        </div>

                    )
                }
            </div>
        );
    }

}


export default Quest;
