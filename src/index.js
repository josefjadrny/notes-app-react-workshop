import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { List } from './list'
import { Detail } from './detail'
import { LanguageProvider } from './languageContext'
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
import languageFileEn from './en'
import languageFileCs from './cs'

const App = () => {
  const [language, setLanguage] = useState(
    languageFileEn
  )

  return(
    <LanguageProvider value={language}>
      <Wrapper>
        <Router>
          <GridBlock>
            <h1>{language.MENU}</h1>
            <ul>
              <li>
                <Link to="/">List</Link>
              </li>
            </ul>
            <h2>{language.LANGUAGE}</h2>
            <button onClick={() => setLanguage(languageFileEn)}>En</button>
            <button onClick={() => setLanguage(languageFileCs)}>Cs</button>
          </GridBlock>
          <GridBlock>
            <Switch>
              <Route exact path="/" component={List}/>
              <Route path="/note/:id" component={Detail}/>
            </Switch>
          </GridBlock>
        </Router>
      </Wrapper>
    </LanguageProvider>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById("app")
)

