import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const List = () => {
  const [notes, setNotes] = useState([] )

  useEffect(() => {
    axios('http://private-9aad-note10.apiary-mock.com/notes').then(response => {
      setNotes(response.data)
    })
  }, [])

  return (
    <div>
      <h2>List all notes</h2>
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