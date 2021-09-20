import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apikey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(prg) =>{
    this.setState({progress:prg})
  }
  render() {
    return (
        <div>
          <Router>
            <Navbar/>
            <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
            />
            <Switch>
              <Route exact path="/"> <News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={5} country="in" ctg="general"/></Route>
              <Route exact path="/business"> <News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={5} country="in" ctg="business"/></Route>
              <Route exact path="/entertainment"> <News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={5} country="in" ctg="entertainment"/></Route>
              <Route exact path="/general"> <News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={5} country="in" ctg="general"/></Route>
              <Route exact path="/health"> <News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={5} country="in" ctg="health"/></Route>
              <Route exact path="/science"> <News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={5} country="in" ctg="science"/></Route>
              <Route exact path="/sports"> <News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={5} country="in" ctg="sports"/></Route>
              <Route exact path="/technology"> <News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={5} country="in" ctg="technology"/></Route>
            </Switch>
          </Router>
        </div>
    )
  }
}

