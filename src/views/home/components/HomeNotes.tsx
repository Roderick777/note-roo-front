import { Button, Col, Empty, Input, Row } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useEffect, useState } from 'react'
import { NoteCard } from '../../../components/NoteCard/NoteCard'
import { INote } from '../../../interfaces/note.interface'
import './HomeNotes.scss'
import { NoteService } from '../../../services/note.service'
import { DeleteOutlined } from '@ant-design/icons'
const { create, list, remove } = NoteService()

type FieldNameType = 'name' | 'description' | 'status' | 'tags'

export const HomeNotes = () => {
  const [notes, setNotes] = useState<INote[]>([])
  const [noteForm, setNoteForm] = useState<INote>({
    id: 0,
    name: '',
    description: '',
    status: true,
    tags: [],
  })

  const changeInput = <T extends {}>(fieldName: FieldNameType, value: T) => {
    const newNoteForm: INote = { ...noteForm }
    newNoteForm[fieldName] = value
    setNoteForm(newNoteForm)
  }

  const listNotes = async () => {
    const notes = await list()
    setNotes(notes)
  }

  const createNote = async () => {
    const data = await create(noteForm)
    listNotes()
  }

  const deleteNote = async (index: number) => {
    const data = await remove(index)
    listNotes()
  }

  useEffect(() => {
    listNotes()
  }, [])

  return (
    <Row>
      <Col xs={24} sm={24} md={12} lg={16} xl={16} xxl={16} className="px-2">
        {notes.length ? (
          <>
            {notes.map((e, i) => (
              <NoteCard key={`note-${i}`}>
                <div className="note">
                  <div>{e.name}</div>
                  <div className="note__actions">
                    <Button
                      onClick={() => deleteNote(i)}
                      size={'small'}
                      shape="circle"
                      icon={<DeleteOutlined />}
                    />
                  </div>
                </div>
              </NoteCard>
            ))}
          </>
        ) : (
          <>
            <Empty />
          </>
        )}
      </Col>
      <Col
        xs={24}
        sm={24}
        md={12}
        lg={8}
        xl={8}
        xxl={8}
        className="px-2 note-form"
      >
        <div>
          <Input
            className="field"
            onChange={(e) => changeInput<string>('name', e.currentTarget.value)}
          />
          <TextArea
            className="field"
            onChange={(e) =>
              changeInput<string>('description', e.currentTarget.value)
            }
          />
        </div>
        <Button onClick={createNote}>Crear</Button>
      </Col>
    </Row>
  )
}
