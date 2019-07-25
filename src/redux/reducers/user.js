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
    default:
      return state
  }
}
