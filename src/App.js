import React,{useState} from 'react'

import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

  const toggle=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode enable","success") 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enable","success")
    }
  }

  return (
    <>
   <Router>
    <Navbar mode={mode} toggle={toggle} />
    <Alert alert={alert} />
    <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/">
          <Textform showAlert={showAlert}  heading="Textutils" mode={mode}  /> 
          </Route>
        </Switch>
        </Router>
    </>
  );
}

export default App;
