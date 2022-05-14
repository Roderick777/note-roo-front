import { INote } from '../interfaces/note.interface'
import { Service } from './service'

/** @description Servicio para obtener la información de las notas */
export const NoteService = () => {
  const create = async (note: INote) => {
    const newNote: INote = await Service.post<INote, INote>('notes', note)
    return newNote
  }

  const list = async () => {
    const notes: INote[] = await Service.get<INote>('notes')
    return notes
  }

  const remove = async (index: number) => {
    const notes = await Service.delete('notes', index)
    return notes
  }

  return { create, list, remove }
}
