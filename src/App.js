import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const apikey=process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);
  const [Mode, setMode] = useState('light');
  const changeMode=()=>{
    if(Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#2a2f47'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
    return (
        <div>
          <Router>
            <Navbar mode={Mode} changeMode={changeMode}/>
            <LoadingBar height={3} color='#f11946' progress={progress} />
            <Switch>
              <Route exact path="/"> <News mode={Mode} setProgress={setProgress} apikey={apikey} key="general" pageSize={5} country="in" ctg="general"/></Route>
              <Route exact path="/business"> <News mode={Mode} setProgress={setProgress} apikey={apikey} key="business" pageSize={5} country="in" ctg="business"/></Route>
              <Route exact path="/entertainment"> <News mode={Mode} setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={5} country="in" ctg="entertainment"/></Route>
              <Route exact path="/general"> <News mode={Mode} setProgress={setProgress} apikey={apikey} key="general" pageSize={5} country="in" ctg="general"/></Route>
              <Route exact path="/health"> <News mode={Mode} setProgress={setProgress} apikey={apikey} key="health" pageSize={5} country="in" ctg="health"/></Route>
              <Route exact path="/science"> <News mode={Mode} setProgress={setProgress} apikey={apikey} key="science" pageSize={5} country="in" ctg="science"/></Route>
              <Route exact path="/sports"> <News mode={Mode} setProgress={setProgress} apikey={apikey} key="sports" pageSize={5} country="in" ctg="sports"/></Route>
              <Route exact path="/technology"> <News mode={Mode} setProgress={setProgress} apikey={apikey} key="technology" pageSize={5} country="in" ctg="technology"/></Route>
            </Switch>
          </Router>
        </div>
    )
  }

  export default App;

