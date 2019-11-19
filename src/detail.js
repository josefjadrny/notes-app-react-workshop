import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import LanguageContext from "./languageContext";

export const Detail = () => {
  const language = useContext(LanguageContext)
  const { id } = useParams()
  const [note, setNote] = useState([] )

  useEffect(() => {
    axios(`http://private-9aad-note10.apiary-mock.com/notes/${id}`).then(response => {
      setNote(response.data)
    })
  }, [])

  return (
    <div>
      <h1>{language.DETAIL} {note.id}</h1>
      <p>{note.title}</p>
    </div>
  )
}