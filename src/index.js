import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { List } from './list'
import { Detail } from './detail'
import styled from 'styled-components'

const GridBlock = styled.div`
  border: 2px solid red;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  min-height: 300px;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`

ReactDom.render(
  <Wrapper>
    <Router>
      <GridBlock>
        <h1>Menu</h1>
        <ul>
          <li>
            <Link to="/">List</Link>
          </li>
        </ul>
      </GridBlock>
      <GridBlock>
        <Switch>
          <Route exact path="/" component={List}/>
          <Route path="/note/:id" component={Detail}/>
        </Switch>
      </GridBlock>
    </Router>
  </Wrapper>,
  document.getElementById("app")
)

