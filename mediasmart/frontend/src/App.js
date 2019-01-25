import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import MembersBoard from './components/members/MembersBoard'
import MemberDetails from './components/members/MemberDetails'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch >
              <Route exact path='/' component={MembersBoard} />
              <Route path='/member/:id' component={MemberDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
