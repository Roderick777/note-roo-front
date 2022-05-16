import { Button, Col } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { IStore } from '../../../store'
import { useHomeNotes } from './../hooks/useHomeNotes'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'

export const HomeNotesAction = () => {
  const { visibilityType } = useSelector(({ note }: IStore) => note)
  const { changeVisibility, changeCreateForm } = useHomeNotes()

  return (
    <Col span={24}>
      <div className="note-admin px-2 py-2">
        <Button
          size="large"
          type="primary"
          shape="circle"
          onClick={() => changeVisibility()}
          icon={
            visibilityType === 'list' ? <AppstoreOutlined /> : <BarsOutlined />
          }
        />

        <Button
          size="large"
          type="primary"
          onClick={() => changeCreateForm(true)}
        >
          Crear nueva nota
        </Button>
      </div>
    </Col>
  )
}
