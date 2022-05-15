import { createStore, combineReducers } from 'redux'
import { INoteState } from './note/interfaces'
import note from './note/reducer'

export interface IStore {
  note: INoteState
}

const reducers = combineReducers({
  note,
})

export default createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
