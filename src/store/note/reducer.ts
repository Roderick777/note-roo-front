import { INote } from './../../interfaces/note.interface'
import { INoteState } from './interfaces'

const initialState: INoteState = {
  notes: [],
  showCreateForm: false,
  visibilityType: 'list',
  noteForm: {
    id: 0,
    name: '',
    description: '',
    status: true,
    tags: [],
  },
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_NOTES': {
      const notes = action.payload
      return { ...state, notes }
    }

    case 'SET_SHOW_CREATE_FORM': {
      const showCreateForm = action.payload
      return { ...state, showCreateForm }
    }

    case 'SET_VISIBILITY_TYPE': {
      const visibilityType = action.payload
      return { ...state, visibilityType }
    }

    case 'SET_NOTE_FORM': {
      const noteForm = action.payload
      return { ...state, noteForm }
    }

    default: {
      return state
    }
  }
}
