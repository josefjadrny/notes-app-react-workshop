import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import LanguageContext from './languageContext'
import axios from 'axios'

export const List = () => {
  const language = useContext(LanguageContext)
  const [notes, setNotes] = useState([] )

  useEffect(() => {
    axios('http://private-9aad-note10.apiary-mock.com/notes').then(response => {
      setNotes(response.data)
    })
  }, [])

  return (
    <div>
      <h1>{language.LIST_ALL}</h1>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <Link to={`/note/${note.id}`}>{note.title}</Link>
?         </li>
        ))}
      </ul>
    </div>
  )
}