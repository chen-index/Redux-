const postReducer = (state = { list: [{ id: 1, title: 'hello' }] }, action) => {
  switch (action.type) {
    case 'LOAD_POSTS':
      return {
        ...state, list: action.payload
      }
    default:
      return state
  }
}
 export default postReducer
