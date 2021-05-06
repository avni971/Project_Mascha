import{Link} from 'react-router-dom'



const About = (props) => {
    console.log(props.location.data.user)
    return (
        <div>
           <h4>Version 1.0.0</h4> 
           <Link to='/Login'>Back</Link>
        </div>
    )
}

export default About
