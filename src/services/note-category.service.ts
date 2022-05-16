import { INoteCategory } from '../interfaces/note-category.interface'
import { INote } from '../interfaces/note.interface'
import { Service } from './service'

/** @description Servicio para obtener la información de las notas */
export const NoteService = () => {
  const key = 'note-category'

  const defaultCategory: INoteCategory = {
    id: 0,
    name: 'Sin Categoría',
    color: '#DDD',
    description:
      'Esta es la categoría por defecto, si no seleccionamos una categoría al momento de crear una nota, esta será la categoría por defecto',
  }

  const initializeCategoryValues = (categories: INoteCategory[]) => {
    if (!!categories.length) {
      localStorage.setItem(key, JSON.stringify([defaultCategory]))
      return [defaultCategory]
    }
    return categories
  }

  const create = async (note: INoteCategory) => {
    const newNote: INoteCategory = await Service.post<
      INoteCategory,
      INoteCategory
    >(key, note)
    return newNote
  }

  const list = async () => {
    let notes: INoteCategory[] = await Service.get<INoteCategory>(key)
    notes = initializeCategoryValues(notes)
    return notes
  }

  const remove = async (index: number) => {
    const notes = await Service.delete(key, index)
    return notes
  }

  return { create, list, remove }
}
