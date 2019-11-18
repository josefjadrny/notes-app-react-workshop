import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { List } from './list'

ReactDom.render(
  <Router>
    <div>
      <h1>Menu</h1>
      <ul>
        <li>
          <Link to="/">List</Link>
        </li>
      </ul>
    </div>
    <div>
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("app")
)
