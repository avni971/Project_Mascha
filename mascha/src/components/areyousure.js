import{Link} from 'react-router-dom'

import React from 'react'
import {auth} from '../firebase/firebase'
import "firebase/firestore";
import {Button} from 'react-bootstrap'



class Areyousure extends React.Component{
    constructor(props){
        super(props) 
    }

    
    deletethisuser(props){
        var user=auth.currentUser;
        console.log(user);
        try{
        user.delete();
        props.history.push({
            pathname:"/Login"})
    }
        catch(e)
        {
            console.log(e);
            alert("user already deleted");
            props.history.push({
            pathname:"/Login"})
        }
    }

    render(){
        
        return (
            <div>
            <h2>you are about to delete your user,are you sure?</h2>
            <Button className="btn" id="spa" type = "submit" onClick={()=>{
                        this.deletethisuser(this.props)
               }}>yes</Button>
             </div>
   
            );
    }

}
const Areyousure1 = () => {
   
}

export default Areyousure