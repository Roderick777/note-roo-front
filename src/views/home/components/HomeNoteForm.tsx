import { Button, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { useHomeNotes } from './../hooks/useHomeNotes'

export const HomeNoteForm = () => {
  const { changeCreateForm, createNote, changeInput } = useHomeNotes()

  return (
    <div>
      <div>
        <label>Título</label>
        <Input
          className="field"
          onChange={(e) => changeInput<string>('name', e.currentTarget.value)}
        />

        <label>Descripción</label>
        <TextArea
          className="field"
          onChange={(e) =>
            changeInput<string>('description', e.currentTarget.value)
          }
        />
      </div>
      <div className="dflex justify-content-end py-2 gap-1">
        <Button onClick={() => changeCreateForm(false)}>Cerrar</Button>
        <Button type="primary" onClick={createNote}>
          Crear
        </Button>
      </div>
    </div>
  )
}
