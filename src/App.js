import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const apikey=process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);
    return (
        <div>
          <Router>
            <Navbar/>
            <LoadingBar height={3} color='#f11946' progress={progress} />
            <Switch>
              <Route exact path="/"> <News setProgress={setProgress} apikey={apikey} key="general" pageSize={5} country="in" ctg="general"/></Route>
              <Route exact path="/business"> <News setProgress={setProgress} apikey={apikey} key="business" pageSize={5} country="in" ctg="business"/></Route>
              <Route exact path="/entertainment"> <News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={5} country="in" ctg="entertainment"/></Route>
              <Route exact path="/general"> <News setProgress={setProgress} apikey={apikey} key="general" pageSize={5} country="in" ctg="general"/></Route>
              <Route exact path="/health"> <News setProgress={setProgress} apikey={apikey} key="health" pageSize={5} country="in" ctg="health"/></Route>
              <Route exact path="/science"> <News setProgress={setProgress} apikey={apikey} key="science" pageSize={5} country="in" ctg="science"/></Route>
              <Route exact path="/sports"> <News setProgress={setProgress} apikey={apikey} key="sports" pageSize={5} country="in" ctg="sports"/></Route>
              <Route exact path="/technology"> <News setProgress={setProgress} apikey={apikey} key="technology" pageSize={5} country="in" ctg="technology"/></Route>
            </Switch>
          </Router>
        </div>
    )
  }

  export default App;

