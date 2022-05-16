import React from 'react'
import './NoteCard.scss'

interface INoteCard {
  children: any
  className?: string
}

export const NoteCard: React.FC<INoteCard> = ({ children, className = '' }) => {
  return <div className={'note-card ' + className}>{children}</div>
}
