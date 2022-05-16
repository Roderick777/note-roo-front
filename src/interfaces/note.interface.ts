import { INoteCategory } from './note-category.interface'

export enum NoteStatusEnum {
  // Estado por hacer
  ToDo = 'to_do',
  // Estado en progreso
  InProgress = 'in_progress',
  // Estado completado
  Completed = 'completed',
  // Estado eliminada
  Deleted = 'deleted',
}

export interface INote {
  id: number
  name: string
  description: string
  status: any
  tags: Array<any>
  category?: INoteCategory
  createdAt?: string
  updatedAt?: string
}
