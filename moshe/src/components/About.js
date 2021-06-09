
import {Button} from 'react-bootstrap'
import React from 'react'

const About = (props) => {
    // console.log(props.location.data.user)
    return (
        <div>
           <h4>Version 1.0.0</h4> 
           {/* <Link to='/Login' className='w-100'>Back</Link> */}
           <Button className = "w-20" type = "submit" onClick={()=>{props.history.push({
                pathname:"/Login"
            });}}>
               חזור
            </Button>
        </div>
    )
}

export default About
