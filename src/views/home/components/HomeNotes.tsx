import { Button, Col, Drawer, Empty, Row } from 'antd'
import { useEffect } from 'react'
import { NoteCard } from '../../../components/NoteCard/NoteCard'
import './HomeNotes.scss'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { IStore } from '../../../store'
import { HomeNoteForm } from './HomeNoteForm'
import { useHomeNotes } from '../hooks/useHomeNotes'
import { HomeNotesAction } from './HomeNotesAction'

export const HomeNotes = () => {
  const { notes, showCreateForm } = useSelector(({ note }: IStore) => note)

  const { listNotes, deleteNote, changeCreateForm, viewNote, getColumsConfig } =
    useHomeNotes()

  useEffect(() => {
    listNotes()
  }, [])

  return (
    <div>
      <Drawer
        title="Crear Nota"
        placement="right"
        onClose={() => changeCreateForm(false)}
        visible={showCreateForm}
      >
        <HomeNoteForm />
      </Drawer>
      <Row>
        <HomeNotesAction />

        {notes.length ? (
          <>
            {notes.map((e, i) => (
              <Col {...getColumsConfig()} key={`note-${i}`} className="px-2">
                <NoteCard className="customNoteCard">
                  <div className="note">
                    <div className="note__title">{e.name}</div>
                    <p className="note__description">
                      {e.description.length > 100
                        ? e.description.substring(0, 100) + '...'
                        : e.description}
                    </p>
                    <div className="note__category">
                      <div
                        className="note__category__circle"
                        style={{ backgroundColor: e.category?.color }}
                      ></div>
                      <div>{e.category?.name}</div>
                    </div>
                    <div className="note__actions">
                      <Button
                        onClick={() => viewNote(e, i)}
                        size={'middle'}
                        shape="circle"
                        icon={<EyeOutlined />}
                      />
                      <Button
                        onClick={() => deleteNote(i)}
                        size={'middle'}
                        shape="circle"
                        icon={<DeleteOutlined />}
                      />
                    </div>
                  </div>
                </NoteCard>
              </Col>
            ))}
          </>
        ) : (
          <>
            <Empty />
          </>
        )}
      </Row>
    </div>
  )
}
