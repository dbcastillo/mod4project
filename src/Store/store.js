import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {GET_ALL_DRINKCARDS} from './actionType'

let initialState = {
  drink: [],
  nameInput: "",
  descriptionInput: "",
  drinkInput: "",
  moodInput: "",
  filterTerm: ""
} //initial state

const reducer = (state = initialState, action) => {
  //state is set to initial state, action gives access to the action
  switch(action.type){
    case GET_ALL_DRINKCARDS:
      return {...state, drinkcards: action.payload}
      //spread operator to keep what's in there and set drinkcards to action.payload which is handled in the thunk
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(logger,thunk))
export default store
