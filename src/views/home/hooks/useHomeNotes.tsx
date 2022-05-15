import { Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { INote } from '../../../interfaces/note.interface'
import { NoteService } from '../../../services/note.service'
import { IStore } from '../../../store'
type FieldNameType = 'name' | 'description' | 'status' | 'tags'

const { create, list, remove } = NoteService()

export const useHomeNotes = () => {
  const dispatch = useDispatch()
  const { visibilityType, noteForm } = useSelector(({ note }: IStore) => note)

  const listNotes = async () => {
    const notes = await list()
    dispatch({ type: 'SET_NOTES', payload: notes })
  }

  const deleteNote = async (index: number) => {
    Modal.warning({
      title: 'Confirmar',
      content: `¿Estas seguro de eliminar esta nota`,
      okText: 'Eliminar',
      cancelText: 'Cancelar',
      onOk: async () => {
        await remove(index)
        listNotes()
      },
    })
  }

  const changeVisibility = () => {
    const newValue = visibilityType === 'list' ? 'cards' : 'list'
    dispatch({ type: 'SET_VISIBILITY_TYPE', payload: newValue })
  }

  const changeCreateForm = (isActive: boolean) => {
    dispatch({ type: 'SET_SHOW_CREATE_FORM', payload: isActive })
  }

  const viewNote = (e: INote, i: number) => {
    Modal.warning({
      title: e.name,
      content: e.description,
      okText: '',
      cancelButtonProps: { style: { display: 'none' } },
      cancelText: 'Cerrar',
      onOk: async () => {},
    })
  }

  const getColumsConfig = () => {
    return visibilityType === 'list'
      ? { xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }
      : { xs: 24, sm: 24, md: 12, lg: 8, xl: 6, xxl: 6 }
  }

  const createNote = async () => {
    await create(noteForm)
    listNotes()
  }

  const changeInput = <T extends {}>(fieldName: FieldNameType, value: T) => {
    const newNoteForm: INote = { ...noteForm }
    newNoteForm[fieldName] = value
    dispatch({ type: 'SET_NOTE_FORM', payload: newNoteForm })
  }

  return {
    listNotes,
    deleteNote,
    changeVisibility,
    changeCreateForm,
    viewNote,
    getColumsConfig,
    createNote,
    changeInput,
  }
}
