import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import MembersBoard from './components/members/MembersBoard'
import MemberDetails from './components/members/MemberDetails'

class App extends Component {
  // componentWillMount () {
  //   const history = createBrowserHistory();
  //   history.push('/list/1');
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch >
            <Route exact path='/list/:page' component={MembersBoard}/>
            <Route path='/member/:id' component={MemberDetails} /> 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
