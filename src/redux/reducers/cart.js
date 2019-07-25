export const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      if (state[0]) {
        let newState = state
        const index = newState.findIndex(el => el.id === action.cart.id)
        if (index !== -1) {
          newState[index].value++
          return newState
        } else {
          newState.push({ ...action.cart, value: 1 })
          return newState
        }
      } else {
        state.push({ ...action.cart, value: 1 })
        return state
      }
    case 'REMOVE_PRODUCT':
      let newState = state.filter(val => val.id !== action.cart)
      return newState
    case 'BUY_PRODUCT':
      return []
    default:
      return state
  }
}
