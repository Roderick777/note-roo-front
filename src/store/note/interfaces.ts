import { INote } from '../../interfaces/note.interface'

export interface INoteState {
  notes: INote[]
  showCreateForm: boolean
  visibilityType: 'cards' | 'list'
  noteForm: INote
}
