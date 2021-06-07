import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import About from './components/About'
import Login from './components/Login'
import SignIn from './components/SignIn'
import Form from './components/Form'
import Areyousure from './components/areyousure'
import ForgotPassword from './components/ForgotPassword'
import Statistics from './components/Statistics'
const App= () =>{

  return (    
    

  <Router>
    <div className='container'>
      <Header/>
      <Route path='/SignIn' component={SignIn} />
      <Route path='/login' component={Login} />
      <Route path='/about' component={About} />
      <Route path='/form' component={Form} />
      <Route path='/areyousure' component={Areyousure} />
      <Route path='/forgotpassword' component={ForgotPassword} />
      <Route path='/signin/statistics' component={Statistics} />
      <Footer />
    </div>
  </Router>
  
  );
}

export default App;
