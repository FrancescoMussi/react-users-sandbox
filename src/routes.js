import React from 'react'
import { Route, Switch } from 'react-router-dom'

import About from './pages/About/About'
import UserAdd from './pages/Users/UserAdd'
import UserDetail from './pages/Users/UserDetail'
import UserEdit from './pages/Users/UserEdit'
import Users from './pages/Users/Users'

const routes = () => (
  <Switch>
    <Route path="/about" exact component={About} />
    <Route path="/user-add" exact component={UserAdd} />
    <Route path="/user-edit" exact component={UserEdit} />
    <Route path="/user/:id" exact component={UserDetail} />
    <Route path="/" exact component={Users} />
  </Switch>
)

export default routes
