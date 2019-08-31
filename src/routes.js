import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Users from './containers/Users/Users'
import UserAdd from './containers/Forms/UserAdd'
import UserEdit from './containers/Forms/UserEdit'


const routes = () => (
  <Switch>
    <Route path="/user_add" exact component={UserAdd} />
    <Route path="/user_edit" exact component={UserEdit} />
    <Route path="/" exact component={Users} />
  </Switch>
)


export default routes;