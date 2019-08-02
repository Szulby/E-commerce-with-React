export const user = (
  state = {
    user: null,
  },
  action
) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        user: action.user,
      }
    case 'REMOVE_USER':
      return {}
    default:
      return state
  }
}
