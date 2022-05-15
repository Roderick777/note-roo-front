import { Button, Col, Drawer, Empty, Row } from 'antd'
import { useEffect } from 'react'
import { NoteCard } from '../../../components/NoteCard/NoteCard'
import './HomeNotes.scss'
import {
  DeleteOutlined,
  AppstoreOutlined,
  BarsOutlined,
  EditOutlined,
  EyeOutlined,
} from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { IStore } from '../../../store'
import { HomeNoteForm } from './HomeNoteForm'
import { useHomeNotes } from '../hooks/useHomeNotes'

export const HomeNotes = () => {
  const { notes, showCreateForm, visibilityType } = useSelector(
    ({ note }: IStore) => note
  )

  const {
    listNotes,
    deleteNote,
    changeVisibility,
    changeCreateForm,
    viewNote,
    getColumsConfig,
  } = useHomeNotes()

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
        <Col span={24}>
          <div className="note-admin px-2">
            <Button
              size="large"
              shape="circle"
              onClick={() => changeVisibility()}
              icon={
                visibilityType === 'list' ? (
                  <AppstoreOutlined />
                ) : (
                  <BarsOutlined />
                )
              }
            />

            <Button onClick={() => changeCreateForm(true)}>
              Crear nueva nota
            </Button>
          </div>
        </Col>

        {notes.length ? (
          <>
            {notes.map((e, i) => (
              <Col {...getColumsConfig()} key={`note-${i}`} className="px-2">
                <NoteCard>
                  <div className="note">
                    <div>{e.name}</div>
                    <div className="note__actions">
                      <Button
                        onClick={() => viewNote(e, i)}
                        size={'small'}
                        shape="circle"
                        icon={<EyeOutlined />}
                      />
                      <Button
                        onClick={() => deleteNote(i)}
                        size={'small'}
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
