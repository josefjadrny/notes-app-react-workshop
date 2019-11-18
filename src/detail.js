import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Detail = () => {
  const { id } = useParams()
  const [note, setNote] = useState([] )

  useEffect(() => {
    axios(`http://private-9aad-note10.apiary-mock.com/notes/${id}`).then(response => {
      setNote(response.data)
    })
  }, [])

  return (
    <div>
      <h1>Note detail Id: {note.id}</h1>
      <p>{note.title}</p>
    </div>
  )
}