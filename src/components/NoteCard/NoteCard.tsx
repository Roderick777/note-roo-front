import React from 'react'
import './NoteCard.scss'

interface INoteCard {
  children: any
}

export const NoteCard: React.FC<INoteCard> = ({ children }) => {
  return <div className="note-card">{children}</div>
}
