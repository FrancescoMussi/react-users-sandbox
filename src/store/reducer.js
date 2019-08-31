import * as actionTypes from './actions'

const initialStore = {
  userList: [],
}
const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case actionTypes.USER_ADD:
      const userList = state.userList.concat(action.payload)
      return { ...state, userList }
    case actionTypes.USER_DELETE:
      const newUserList = state.userList.filter(
        item => item.id !== action.payload.id
      )
      return { ...state, userList: newUserList }
    case actionTypes.USER_EDIT:
      const index = state.userList.findIndex(
        item => item.id === action.payload.id
      )
      const newList = [...state.userList]
      newList[index] = action.payload
      return { ...state, userList: newList }
    default:
      break
  }
  return state
}
export default reducer
