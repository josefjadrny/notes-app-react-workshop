import React, { useState, useEffect } from 'react'
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
            {note.title}
          </li>
        ))}
      </ul>
    </div>
  )
}