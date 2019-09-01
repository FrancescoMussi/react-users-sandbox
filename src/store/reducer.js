import * as actionTypes from './actionsTypes'

const initialStore = {
  userList: [],
}

let newUserList = []

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case actionTypes.USER_ADD:
      newUserList = state.userList.concat(action.payload)
      return { ...state, userList: newUserList }

    case actionTypes.USER_DELETE:
      newUserList = state.userList.filter(item => item.id !== action.payload.id)
      return { ...state, userList: newUserList }

    case actionTypes.USER_EDIT:
      const index = state.userList.findIndex(
        item => item.id === action.payload.id
      )
      newUserList = [...state.userList]
      newUserList[index] = action.payload
      return { ...state, userList: newUserList }

    default:
      break
  }
  return state
}
export default reducer
