import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import MembersBoard from './components/members/MembersBoard'
import MemberDetails from './components/members/MemberDetails'
// import MembersList from './components/members/MembersList'
import { createBrowserHistory } from 'history'

class App extends Component {
  componentWillMount () {
    const history = createBrowserHistory();
    history.push('/list/1');
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch >
            <Route path='/list/:page' component={MembersBoard} />
            <Route path='/member/:id' component={MemberDetails} /> 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
